import { useObservableState } from "observable-hooks";
import React, { useCallback, useMemo } from "react";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import styled from "styled-components";
import { Status } from "../../app";
import { useLabels } from "./hooks";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

interface ControlProps {
  duration$: Observable<number | undefined>;
  status: Status;
  onAction: (action: ControlAction) => void;
}

export type ControlActionType =
  | "VideoStartedPlaying"
  | "VideoStoppedPlaying"
  | "VoiceStartedRecording"
  | "VoiceStoppedRecording"
  | "VoiceStartedPlaying"
  | "VoiceStoppedPlaying";

export type ControlAction = { type: ControlActionType; event?: any };

const noop = (...args: any[]): void => {};

const Controls: React.FC<ControlProps> = ({ status, onAction, duration$ }) => {
  const labels = useLabels(status);
  const noVideo = useObservableState(
    duration$.pipe(map((d) => d === undefined)),
    false
  );

  const videoDisabled = useMemo(
    () => noVideo || status === "Recording" || status === "PlayingVoice",
    [noVideo, status]
  );

  const recordingDisabled = useMemo(
    () => noVideo || status === "PlayingVideo" || status === "PlayingVoice",
    [noVideo, status]
  );

  const playbackDisabled = useMemo(
    () => noVideo || status === "PlayingVideo" || status === "Recording",
    [noVideo, status]
  );

  const onAudioClick = useCallback(
    (event) => {
      if (status === "PlayingVideo") {
        onAction({ type: "VideoStoppedPlaying", event });
      } else {
        onAction({ type: "VideoStartedPlaying", event });
      }
    },
    [status, onAction]
  );

  const onRecordingClick = useCallback(
    (event) => {
      if (status === "Recording") {
        onAction({ type: "VoiceStoppedRecording", event });
      } else {
        onAction({ type: "VoiceStartedRecording", event });
      }
    },
    [status, onAction]
  );

  const onPlaybackClick = useCallback(
    (event) => {
      if (status === "PlayingVoice") {
        onAction({ type: "VoiceStoppedPlaying", event });
      } else {
        onAction({ type: "VoiceStartedPlaying", event });
      }
    },
    [status, onAction]
  );

  return (
    <Container>
      <button
        disabled={videoDisabled}
        onClick={videoDisabled ? noop : onAudioClick}
      >
        {labels.video}
      </button>
      <button
        disabled={recordingDisabled}
        onClick={recordingDisabled ? noop : onRecordingClick}
      >
        {labels.recording}
      </button>
      <button
        disabled={playbackDisabled}
        onClick={playbackDisabled ? noop : onPlaybackClick}
      >
        {labels.playback}
      </button>
    </Container>
  );
};

export default Controls;
