import React from "react";

import Player from "./components/player";
import Input from "./components/input";
import Timebar from "./components/timebar";
import Controls from "./components/controls";

import Recorder from "./components/recorder";
import { useAppState } from "./state";

function App() {
  const {
    state$,
    setUrl,
    setStatus,
    setDuration,
    setProgress,
    setManualProgress,
    setRegion,
  } = useAppState();

  return (
    <div>
      <p>https://www.youtube.com/watch?v=EqE_AH39144</p>
      <p>https://www.youtube.com/watch?v=sS55zq6Hz8A</p>
      <Input onChange={setUrl} />
      <Timebar
        state$={state$}
        setRegion={setRegion}
        setProgress={setManualProgress}
      />
      <Controls state$={state$} setStatus={setStatus} />
      <Player
        state$={state$}
        setDuration={setDuration}
        setProgress={setProgress}
      />
      <Recorder state$={state$} setStatus={setStatus} />
    </div>
  );
}

export default App;
