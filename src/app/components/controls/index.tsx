import React from "react";
import {
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import { Observable } from "rxjs";
import { map, withLatestFrom } from "rxjs/operators";
import styled from "styled-components";
import { AppStatus } from "../../state";
import { getLabels } from "./utils";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  & > * {
    margin: 0 0.5rem;
  }
`;

interface ControlProps {
  status$: Observable<AppStatus>;
  setStatus: (status: AppStatus) => void;
}

const noop = (...args: any[]): void => {};

const Controls: React.FC<ControlProps> = ({ status$, setStatus }) => {
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
    $e.pipe(withLatestFrom(status$))
  );
  useSubscription(videoClick$, ([_, status]) => {
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
    $e.pipe(withLatestFrom(status$))
  );
  useSubscription(recordingClick$, ([_, status]) => {
    switch (status) {
      case "recordingVoice":
        setStatus("idle");
        break;
      case "idle":
        setStatus("attemptingRecord");
        break;
      default:
        break;
    }
  });

  const [onPlaybackClick, playbackClick$] = useObservableCallback(($e) =>
    $e.pipe(withLatestFrom(status$))
  );
  useSubscription(playbackClick$, ([_, status]) => {
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
