import React from "react";
import styled from "styled-components";
import { Observable } from "rxjs";
import { useObservableState } from "observable-hooks";
import { map } from "rxjs/operators";

interface MarkerProps {
  progress$: Observable<number>;
}

const StyledRect = styled.rect`
  width: 1px;
  height: 100%;
  fill: rgb(10, 10, 10);
`;

const Marker: React.FC<MarkerProps> = ({ progress$ }) => {
  const [markerPosition] = useObservableState<string>(
    () =>
      progress$.pipe(
        map((v) => {
          if (!v) return "0px";
          return `${v * 100}%`;
        })
      ),
    "0px"
  );

  return <StyledRect x={markerPosition} />;
};

export default Marker;
