import { useObservable, useSubscription } from "observable-hooks";
import React, { useCallback, useRef, useState } from "react";
import { Observable } from "rxjs";
import { pairwise } from "rxjs/operators";
import { useMediaRecorder } from "../../../shared/hooks/media";
import { AppStatus } from "../../state";

interface RecorderProps {
  status$: Observable<AppStatus>;
  setStatus: (status: AppStatus) => void;
}

const Recorder: React.FC<RecorderProps> = ({ status$, setStatus }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const statusPair$ = useObservable(() => status$.pipe(pairwise()));
  const [blobUrl, setBlobUrl] = useState<string | undefined>(undefined);

  const onStop = useCallback(
    (blob: Blob) => {
      if (refAudio.current) {
        const _blobUrl = URL.createObjectURL(blob);
        refAudio.current.src = _blobUrl;
        setBlobUrl(_blobUrl);
        setStatus("idle");
      }
    },
    [setStatus, setBlobUrl, refAudio]
  );

  const onStart = useCallback(() => setStatus("recordingVoice"), [setStatus]);
  const onError = useCallback(() => setStatus("idle"), [setStatus]);

  const { startRecording, stopRecording } = useMediaRecorder({
    onStop,
    onStart,
    onError,
  });

  useSubscription(statusPair$, ([statusPrev, status]) => {
    switch (status) {
      case "attemptingRecord":
        startRecording();
        URL.revokeObjectURL(blobUrl || "");
        setBlobUrl(undefined);
        break;
      case "playingVoice":
        if (refAudio.current && refAudio.current.src) {
          refAudio.current.play();
        }
        break;
      case "idle":
        if (statusPrev === "playingVoice") {
          if (refAudio.current) {
            refAudio.current.pause();
            refAudio.current.currentTime = 0;
          }
        } else if (statusPrev === "recordingVoice") {
          stopRecording();
        }
        break;
      default:
        break;
    }
  });

  const onEnded = useCallback(() => {
    if (refAudio.current) {
      refAudio.current.pause();
      refAudio.current.currentTime = 0;
      setStatus("idle");
    }
  }, [refAudio, setStatus]);

  return <audio ref={refAudio} onEnded={onEnded} />;
};

export default Recorder;
