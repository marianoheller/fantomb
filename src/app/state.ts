import { useSubscription } from "observable-hooks";
import { useCallback, useMemo, RefObject, createRef } from "react";
import ReactPlayer from "react-player";
import { BehaviorSubject } from "rxjs";

export type Url = string | undefined;
export type DefinedRegion = { start: number; end: number };
export type TRegion = DefinedRegion | undefined;

export type AppStatus =
  | "idle"
  | "loading"
  | "playingVoice"
  | "recordingVoice"
  | "playingVideo";

export type AppState = {
  status: AppStatus;
  url: Url;
  duration: number;
  progress: number;
  region: TRegion;
  playerRef: RefObject<ReactPlayer>;
};

const initialState: AppState = {
  status: "idle",
  url: undefined,
  duration: 0,
  progress: 0,
  region: undefined,
  playerRef: createRef(),
};

export const useAppState = () => {
  const state$ = useMemo(() => new BehaviorSubject<AppState>(initialState), []);

  const setStatus = useCallback(
    (status: AppStatus) => {
      const value = state$.getValue();
      if (value.region) value.playerRef.current?.seekTo(value.region.start);
      state$.next({ ...value, status });
    },
    [state$]
  );

  const setUrl = useCallback(
    (url: Url) => state$.next({ ...state$.getValue(), url }),
    [state$]
  );

  const setProgress = useCallback(
    (progress: number) => {
      const value = state$.getValue();
      if (value.region) {
        if (progress >= value.region.end) {
          value.playerRef.current?.seekTo(value.region.start);
          state$.next({
            ...value,
            progress: value.region.start,
            status: "idle",
          });
          return;
        }
      }
      state$.next({ ...value, progress });
    },
    [state$]
  );

  const setManualProgress = useCallback(
    (progress: number) => {
      const value = state$.getValue();
      value.playerRef.current?.seekTo(progress);
      state$.next({ ...value, status: "idle", progress });
    },
    [state$]
  );

  const setDuration = useCallback(
    (duration: number) => state$.next({ ...state$.getValue(), duration }),
    [state$]
  );

  const setRegion = useCallback(
    (region: TRegion) => state$.next({ ...state$.getValue(), region }),
    [state$]
  );

  useSubscription(state$, console.log);

  return {
    state$,
    setStatus,
    setUrl,
    setProgress,
    setManualProgress,
    setDuration,
    setRegion,
  };
};
