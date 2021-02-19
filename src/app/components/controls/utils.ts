import { AppStatus } from "../../state";

export const getLabels = (status: AppStatus) => {
  const video = status === "playingVideo" ? "Stop" : "Play";
  const recording =
    status === "recordingVoice" ? "Stop recording" : "Start recording";
  const playback = status === "playingVoice" ? "Stop voice" : "Play Voice";

  return { video, recording, playback };
};
