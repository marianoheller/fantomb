import React from "react";

const noop = () => {};

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
  let [status, setStatus] = React.useState("idle");
  let [mediaBlob, setMediaBlob] = React.useState<Blob | null>(null);
  let [isAudioMuted, setIsAudioMuted] = React.useState(false);

  async function getMediaStream() {
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
  }

  function clearMediaStream() {
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      mediaStream.current = null;
    }
  }

  async function startRecording() {
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
      mediaRecorder.current.start();
      setStatus("recording");
      onStart();
    }
  }

  function handleDataAvailable(e: BlobEvent) {
    if (e.data.size) {
      mediaChunks.current.push(e.data);
    }
    onDataAvailable(e.data);
  }

  function handleStop() {
    let [sampleChunk] = mediaChunks.current;
    const type = sampleChunk ? sampleChunk.type : "audio/webm";
    let blobPropertyBag = Object.assign({ type }, blobOptions);
    let blob = new Blob(mediaChunks.current, blobPropertyBag);

    setMediaBlob(blob);
    setStatus("stopped");
    onStop(blob);
  }

  function handleError(e: MediaRecorderErrorEvent) {
    setError(e.error);
    setStatus("idle");
    onError(e.error);
  }

  function muteAudio(mute: boolean) {
    setIsAudioMuted(mute);

    if (mediaStream.current) {
      mediaStream.current.getAudioTracks().forEach((audioTrack) => {
        audioTrack.enabled = !mute;
      });
    }
  }

  function pauseRecording() {
    if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
      mediaRecorder.current.pause();
    }
  }

  function resumeRecording() {
    if (mediaRecorder.current && mediaRecorder.current.state === "paused") {
      mediaRecorder.current.resume();
    }
  }

  function stopRecording() {
    if (mediaRecorder.current) {
      setStatus("stopping");
      mediaRecorder.current.stop();
      // not sure whether to place clean up in useEffect?
      // If placed in useEffect the handler functions become dependencies of useEffect
      mediaRecorder.current.removeEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorder.current.removeEventListener("stop", handleStop);
      mediaRecorder.current.removeEventListener("error", handleError);
      clearMediaStream();
    }
  }

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
