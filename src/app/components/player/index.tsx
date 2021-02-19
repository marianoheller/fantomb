import { useObservableState } from "observable-hooks";
import React, { useCallback } from "react";
import ReactPlayer from "react-player";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import styled from "styled-components";
import { AppState } from "../../state";

interface PlayerProps {
  state$: BehaviorSubject<AppState>;
  setProgress: (progress: number) => void;
  setDuration: (progress: number) => void;
}

const StyledReactPlayer = styled(ReactPlayer)`
  pointer-events: none;
`;

const Player: React.FC<PlayerProps> = ({
  state$,
  setProgress,
  setDuration,
}) => {
  const [ref] = useObservableState(() => state$.pipe(map((s) => s.playerRef)));
  const _setProgress = useCallback(({ played }) => setProgress(played), [
    setProgress,
  ]);

  const [url] = useObservableState(() => state$.pipe(map((s) => s.url)));
  const [playing] = useObservableState(() =>
    state$.pipe(map((s) => s.status === "playingVideo"))
  );

  return (
    <StyledReactPlayer
      ref={ref}
      url={url}
      playing={playing}
      controls={false}
      onDuration={setDuration}
      onProgress={_setProgress}
      volume={1}
      progressInterval={100}
    />
  );
};

export default Player;
