import React from "react";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, map, withLatestFrom } from "rxjs/operators";
import styled from "styled-components";
import { AppState, AppStatus } from "../../state";
import { getLabels } from "./utils";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

interface ControlProps {
  state$: BehaviorSubject<AppState>;
  setStatus: (status: AppStatus) => void;
}

const noop = (...args: any[]): void => {};

const Controls: React.FC<ControlProps> = ({ state$, setStatus }) => {
  const status$ = useObservable(() =>
    state$.pipe(
      map((s) => s.status),
      distinctUntilChanged()
    )
  );

  const [labels] = useObservableState(() => status$.pipe(map(getLabels)));

  const [videoEnabled] = useObservableState<boolean>(() =>
    status$.pipe(
      map((status) => status === "playingVideo" || status === "idle")
    )
  );

  const [recordingEnabled] = useObservableState<boolean>(() =>
    status$.pipe(
      map((status) => status === "recordingVoice" || status === "idle")
    )
  );

  const [playbackEnabled] = useObservableState<boolean>(() =>
    status$.pipe(
      map((status) => status === "playingVoice" || status === "idle")
    )
  );

  const [onVideoClick, videoClick$] = useObservableCallback(($e) =>
    $e.pipe(withLatestFrom(state$))
  );
  useSubscription(videoClick$, ([_, { status }]) => {
    switch (status) {
      case "playingVideo":
        setStatus("idle");
        break;
      case "idle":
        setStatus("playingVideo");
        break;
      default:
        break;
    }
  });

  const [onRecordingClick, recordingClick$] = useObservableCallback(($e) =>
    $e.pipe(withLatestFrom(state$))
  );
  useSubscription(recordingClick$, ([_, { status }]) => {
    switch (status) {
      case "recordingVoice":
        setStatus("idle");
        break;
      case "idle":
        setStatus("recordingVoice");
        break;
      default:
        break;
    }
  });

  const [onPlaybackClick, playbackClick$] = useObservableCallback(($e) =>
    $e.pipe(withLatestFrom(state$))
  );
  useSubscription(playbackClick$, ([_, { status }]) => {
    switch (status) {
      case "playingVoice":
        setStatus("idle");
        break;
      case "idle":
        setStatus("playingVoice");
        break;
      default:
        break;
    }
  });

  return (
    <Container>
      <button
        disabled={!videoEnabled}
        onClick={videoEnabled ? onVideoClick : noop}
      >
        {labels?.video}
      </button>
      <button
        disabled={!recordingEnabled}
        onClick={recordingEnabled ? onRecordingClick : noop}
      >
        {labels?.recording}
      </button>
      <button
        disabled={!playbackEnabled}
        onClick={playbackEnabled ? onPlaybackClick : noop}
      >
        {labels?.playback}
      </button>
    </Container>
  );
};

export default Controls;
