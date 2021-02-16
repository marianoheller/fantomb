import React, { useEffect, useRef } from "react";

import Player from "../components/player";
import Input from "../components/input";
import Timebar from "../components/timebar";
import Controls, { ControlAction } from "../components/controls";

import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import { filter, map, tap, throttleTime, withLatestFrom } from "rxjs/operators";
import { merge, OperatorFunction } from "rxjs";
import ReactPlayer from "react-player";
import Recorder from "../components/recorder";

type Region = { start: number; end: number };
type TRegion = Region | undefined;

export type Status = "PlayingVideo" | "PlayingVoice" | "Recording" | "Idle";

function App() {
  const playerRef = useRef<ReactPlayer>(null);

  const [onUrlChange, url$] = useObservableCallback<string | undefined>(
    (u$) => u$,
    undefined
  );

  const [onRegion, region$] = useObservableCallback<TRegion>((r$) => r$);

  const [onDuration, duration$] = useObservableCallback<number | undefined>(
    (d$) => d$
  );

  const [onPlayerProgress, playerProgress$] = useObservableCallback<number>(
    (n$) => n$
  );

  const [onManualProgress, manualProgress$] = useObservableCallback<number>(
    (n$) => n$.pipe(tap((n) => playerRef.current?.seekTo(n)))
  );

  const progress$ = merge(playerProgress$, manualProgress$).pipe(
    throttleTime(100)
  );

  const [status, onControlAction] = useObservableState<Status, ControlAction>(
    (a$) =>
      a$.pipe(
        withLatestFrom(region$),
        map(([{ type }, r]) => {
          switch (type) {
            case "VideoStartedPlaying":
              if (r) playerRef.current?.seekTo(r.start)
              return "PlayingVideo";
            case "VoiceStartedPlaying":
              return "PlayingVoice";
            case "VoiceStartedRecording":
              return "Recording";
            case "VideoStoppedPlaying":
            case "VoiceStoppedPlaying":
            case "VoiceStoppedRecording":
            default:
              return "Idle";
          }
        })
      ),
    "Idle"
  );

  const regionEndAutomatically$ = useObservable<Region>(() =>
    playerProgress$.pipe(
      withLatestFrom(region$),
      filter(([, r]) => r !== undefined) as OperatorFunction<
        [number, TRegion],
        [number, Region]
      >,
      filter(([v, r]) => v >= r.end),
      map(([, r]) => r)
    )
  );

  useSubscription(regionEndAutomatically$, (r) => {
    onControlAction({ type: "VideoStoppedPlaying" });
    playerRef.current?.seekTo(r.start);
  });

  return (
    <div>
      <p>https://www.youtube.com/watch?v=EqE_AH39144</p>
      <Input onChange={onUrlChange} />
      <Timebar
        duration$={duration$}
        progress={progress$}
        onClick={onManualProgress}
        onRegion={onRegion}
        region$={region$}
      />
      <Controls
        status={status}
        onAction={onControlAction}
        duration$={duration$}
      />
      <Player
        ref={playerRef}
        url$={url$}
        onDuration={onDuration}
        onProgress={onPlayerProgress}
        playing={status === "PlayingVideo"}
      />
      <Recorder disabled={false} status={status} onAction={onControlAction} />
    </div>
  );
}

export default App;
