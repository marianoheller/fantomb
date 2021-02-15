import React, { useCallback, useEffect, useRef, useState } from "react";
import { Status } from "../../app";
import { useMediaRecorder } from "../../shared/hooks/media";
import { ControlAction } from "../controls";

interface RecorderProps {
  disabled: boolean;
  status: Status;
  onAction: (a: ControlAction) => void;
}

const Recorder: React.FC<RecorderProps> = ({ disabled, onAction, status }) => {
  const refPlayer = useRef<HTMLAudioElement>(null);
  const [prevStatus, setPrevStatus] = useState<Status>(status);

  const onStop = useCallback(
    (blob: Blob) => {
      if (refPlayer.current) {
        const blobUrl = URL.createObjectURL(blob);
        console.warn("GOT URL", blobUrl);
        refPlayer.current.src = blobUrl;
        onAction({ type: "VoiceStoppedRecording" });
      }
    },
    [onAction, refPlayer]
  );

  const { startRecording, stopRecording } = useMediaRecorder({ onStop });

  useEffect(() => {
    setPrevStatus(status);
  }, [status]);

  useEffect(() => {
    if (status === "Recording") startRecording();
    if (status !== "Recording" && prevStatus === "Recording") stopRecording();
  }, [status, prevStatus, startRecording, stopRecording]);

  useEffect(() => {
    if (refPlayer.current) {
      if (status === "PlayingVoice") refPlayer.current.play();
      if (prevStatus === "PlayingVoice" && status !== "PlayingVoice") {
        refPlayer.current.pause();
        refPlayer.current.currentTime = 0;
      }
    }
  }, [status, prevStatus]);

  const onEnded = useCallback(() => {
    if (refPlayer.current) {
      refPlayer.current.pause();
      refPlayer.current.currentTime = 0;
      onAction({ type: "VoiceStoppedPlaying" });
    }
  }, [refPlayer, onAction]);

  return <audio ref={refPlayer} onEnded={onEnded} />;
};

export default Recorder;
