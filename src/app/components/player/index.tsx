import React, { RefObject, useCallback } from "react";
import styled from "styled-components";
import { useObservableState } from "observable-hooks";
import ReactPlayer from "react-player";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AppStatus, Url } from "../../state";

interface PlayerProps {
  url$: Observable<Url>;
  status$: Observable<AppStatus>;
  playerRef$: Observable<RefObject<ReactPlayer>>;
  setProgress: (progress: number) => void;
  setDuration: (progress: number) => void;
}

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  pointer-events: none;
`;

const Player: React.FC<PlayerProps> = ({
  url$,
  status$,
  playerRef$,
  setProgress,
  setDuration,
}) => {
  const [ref] = useObservableState(() => playerRef$);
  const [url] = useObservableState(() => url$);
  const [playing] = useObservableState(() =>
    status$.pipe(map((status) => status === "playingVideo"))
  );
  const _setProgress = useCallback(({ played }) => setProgress(played), [
    setProgress,
  ]);

  return (
    <PlayerWrapper>
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
    </PlayerWrapper>
  );
};

export default Player;
