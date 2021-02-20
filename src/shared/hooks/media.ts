import React, { useCallback } from "react";

const noop = () => {};

export type MediaRecorderStatus =
  | "acquiring_media"
  | "ready"
  | "failed"
  | "idle"
  | "stopping"
  | "stopped"
  | "recording";

export interface UseMediaRecorder {
  blobOptions?: Partial<BlobPropertyBag>;
  onStop?: (b: Blob) => void;
  onStart?: VoidFunction;
  onError?: (e: DOMException) => void;
  onDataAvailable?: (b: Blob) => void;
}

export function useMediaRecorder({
  blobOptions = {},
  onStop = noop,
  onStart = noop,
  onError = noop,
  onDataAvailable = noop,
}: UseMediaRecorder) {
  let mediaChunks = React.useRef<Blob[]>([]);
  let mediaStream = React.useRef<MediaStream | null>(null);
  let mediaRecorder = React.useRef<MediaRecorder | null>(null);
  let [error, setError] = React.useState<Error | null>(null);
  let [status, setStatus] = React.useState<MediaRecorderStatus>("idle");
  let [mediaBlob, setMediaBlob] = React.useState<Blob | null>(null);
  let [isAudioMuted, setIsAudioMuted] = React.useState(false);

  const getMediaStream = useCallback(async () => {
    if (error) {
      setError(null);
    }

    setStatus("acquiring_media");

    try {
      const stream = await window.navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      stream
        .getAudioTracks()
        .forEach((audioTrack) => stream.addTrack(audioTrack));

      mediaStream.current = stream;
      setStatus("ready");
    } catch (err) {
      setError(err);
      setStatus("failed");
    }
  }, [mediaStream, setStatus, setError, error]);

  const clearMediaStream = useCallback(() => {
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      mediaStream.current = null;
    }
  }, [mediaStream]);

  const handleDataAvailable = useCallback(
    (e: BlobEvent) => {
      if (e.data.size) {
        mediaChunks.current.push(e.data);
      }
      onDataAvailable(e.data);
    },
    [onDataAvailable, mediaChunks]
  );

  const handleStop = useCallback(() => {
    let [sampleChunk] = mediaChunks.current;
    const type = sampleChunk ? sampleChunk.type : "audio/webm";
    let blobPropertyBag = Object.assign({ type }, blobOptions);
    let blob = new Blob(mediaChunks.current, blobPropertyBag);

    setMediaBlob(blob);
    setStatus("stopped");
    onStop(blob);
  }, [mediaChunks, blobOptions, setMediaBlob, setStatus, onStop]);

  const handleError = useCallback(
    (e: MediaRecorderErrorEvent) => {
      setError(e.error);
      setStatus("idle");
      onError(e.error);
    },
    [setError, setStatus, onError]
  );

  const startRecording = useCallback(async () => {
    if (error) {
      setError(null);
    }

    if (!mediaStream.current && status !== "acquiring_media") {
      await getMediaStream();
    }

    mediaChunks.current = [];

    if (mediaStream.current) {
      mediaRecorder.current = new MediaRecorder(mediaStream.current, {
        mimeType: "audio/webm",
      });
      mediaRecorder.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.addEventListener("stop", handleStop);
      mediaRecorder.current.addEventListener("error", handleError);
      mediaRecorder.current.start(50);
      setStatus("recording");
      onStart();
    }
  }, [
    mediaRecorder,
    mediaStream,
    mediaChunks,
    error,
    status,
    onStart,
    setError,
    setStatus,
    getMediaStream,
    handleDataAvailable,
    handleError,
    handleStop,
  ]);

  const muteAudio = useCallback(
    (mute: boolean) => {
      setIsAudioMuted(mute);

      if (mediaStream.current) {
        mediaStream.current.getAudioTracks().forEach((audioTrack) => {
          audioTrack.enabled = !mute;
        });
      }
    },
    [setIsAudioMuted, mediaStream]
  );

  const pauseRecording = useCallback(() => {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.pause();
    }
  }, [mediaRecorder]);

  const resumeRecording = useCallback(() => {
    if (mediaRecorder.current && mediaRecorder.current.state === "paused") {
      mediaRecorder.current.resume();
    }
  }, [mediaRecorder]);

  const stopRecording = useCallback(() => {
    if (mediaRecorder.current) {
      setStatus("stopping");
      try {
        mediaRecorder.current.stop();
      } catch {
        console.warn("Stoping idle media recorder!");
      }
      mediaRecorder.current.removeEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.removeEventListener("stop", handleStop);
      mediaRecorder.current.removeEventListener("error", handleError);
      clearMediaStream();
    }
  }, [
    mediaRecorder,
    clearMediaStream,
    handleDataAvailable,
    handleError,
    handleStop,
    setStatus,
  ]);

  React.useEffect(() => {
    if (!window.MediaRecorder) {
      throw new ReferenceError(
        "MediaRecorder is not supported in this browser. Please ensure that you are running the latest version of chrome/firefox/edge."
      );
    }
  }, []);

  return {
    error,
    status,
    mediaBlob,
    isAudioMuted,
    stopRecording,
    getMediaStream,
    startRecording,
    pauseRecording,
    resumeRecording,
    clearMediaStream,
    muteAudio: () => muteAudio(true),
    unMuteAudio: () => muteAudio(false),
    get liveStream() {
      if (mediaStream.current) {
        return new MediaStream(mediaStream.current.getVideoTracks());
      }
      return null;
    },
  };
}
