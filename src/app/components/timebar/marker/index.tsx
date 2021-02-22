import React from "react";
import styled from "styled-components";
import { Observable } from "rxjs";
import { useObservableState } from "observable-hooks";
import { map } from "rxjs/operators";
import { AppStatus } from "../../../state";

interface MarkerProps {
  progress$: Observable<number>;
  status$: Observable<AppStatus>;
}

const StyledRect = styled.rect<{ playing: boolean }>`
  width: 1px;
  height: 100%;
  fill: rgb(10, 10, 10);
  transition: ${({ playing }) => (playing ? "x 50ms ease-in-out" : "none")};
`;

const numberToX = (v: number): string => {
  if (!v) return "0px";
  return `${v * 100}%`;
};

const Marker: React.FC<MarkerProps> = ({ progress$, status$ }) => {
  const [playing] = useObservableState<boolean>(
    () => status$.pipe(map((s) => s === "playingVideo")),
    false
  );
  const [markerPosition] = useObservableState<string>(
    () => progress$.pipe(map(numberToX)),
    "0px"
  );

  return <StyledRect x={markerPosition} playing={playing} />;
};

export default Marker;
