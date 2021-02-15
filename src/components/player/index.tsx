import { useObservableState } from "observable-hooks";
import React, { useCallback } from "react";
import ReactPlayer from "react-player";
import { Observable } from "rxjs";
import styled from "styled-components";

interface PlayerProps {
  url$: Observable<string | undefined>;
  playing: boolean;
  onDuration: (n: number) => void;
  onProgress: (n: number) => void;
}

const StyledReactPlayer = styled(ReactPlayer)`
  pointer-events: none;
`;

const Player = React.forwardRef<ReactPlayer, PlayerProps>(
  ({ url$, playing, onDuration, onProgress }, ref) => {
    const _onProgress = useCallback(({ played }) => onProgress(played), [
      onProgress,
    ]);

    const url = useObservableState(url$);

    return (
      <StyledReactPlayer
        ref={ref}
        url={url}
        playing={playing}
        controls={false}
        onDuration={onDuration}
        onProgress={_onProgress}
        volume={1}
        progressInterval={100}
      />
    );
  }
);

export default Player;
