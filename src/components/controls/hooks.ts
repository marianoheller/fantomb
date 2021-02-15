import { useMemo } from "react";
import { Status } from "../../app";

export const useLabels = (status: Status) => {
  const video = useMemo(() => (status === "PlayingVideo" ? "Stop" : "Play"), [
    status,
  ]);
  const recording = useMemo(
    () => (status === "Recording" ? "Stop recording" : "Start recording"),
    [status]
  );
  const playback = useMemo(
    () => (status === "PlayingVoice" ? "Stop voice" : "Play Voice"),
    [status]
  );

  return { video, recording, playback };
};
