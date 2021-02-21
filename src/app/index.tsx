import React from "react";

import Player from "./components/player";
import Input from "./components/input";
import Timebar from "./components/timebar";
import Controls from "./components/controls";
import Recorder from "./components/recorder";

import { useAppState } from "./state";
import { usePartitionedState } from "./hooks";

function App() {
  const { state$, ...setters } = useAppState();

  const {
    url$,
    status$,
    region$,
    duration$,
    progress$,
    playerRef$,
  } = usePartitionedState(state$);

  return (
    <div>
      <Input onChange={setters.setUrl} />
      <Timebar
        url$={url$}
        region$={region$}
        duration$={duration$}
        progress$={progress$}
        setRegion={setters.setRegion}
        setProgress={setters.setManualProgress}
      />
      <Controls status$={status$} setStatus={setters.setStatus} />
      <Player
        url$={url$}
        playerRef$={playerRef$}
        status$={status$}
        setDuration={setters.setDuration}
        setProgress={setters.setProgress}
      />
      <Recorder status$={status$} setStatus={setters.setStatus} />
    </div>
  );
}

export default App;
