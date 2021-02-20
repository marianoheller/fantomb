import { useObservable, useSubscription } from "observable-hooks";
import React, { useCallback, useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, map, pairwise } from "rxjs/operators";
import { useMediaRecorder } from "../../../shared/hooks/media";
import { AppState, AppStatus } from "../../state";

interface RecorderProps {
  state$: BehaviorSubject<AppState>;
  setStatus: (status: AppStatus) => void;
}

const Recorder: React.FC<RecorderProps> = ({ state$, setStatus }) => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const status$ = useObservable(() =>
    state$.pipe(
      distinctUntilChanged((s1, s2) => s1.status === s2.status),
      map((s) => s.status),
      pairwise()
    )
  );
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

  useSubscription(status$, ([statusPrev, status]) => {
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
