import React from "react";
import { Observable } from "rxjs";
import { useObservableState } from "observable-hooks";
import styled from "styled-components";

const Rect = styled.rect`
  height: 100%;
  fill: rgba(0, 0, 0, 0.2);
  stroke: rgba(0, 0, 0, 0.2);
  stroke-width: 0px 1px 0px 1px;
  cursor: all-scroll;
`;

export type TRegion = { start: number; end: number } | undefined;

export interface RegionProps {
  region$: Observable<TRegion>;
}

const Region: React.FC<RegionProps> = ({ region$ }) => {
  const [region] = useObservableState<TRegion>(() => region$, undefined);

  if (region === undefined) return null;
  return (
    <Rect
      onClick={e => {
        e.stopPropagation()
      }}
      onMouseDown={e => {
        e.stopPropagation()
      }}
      x={`${region.start * 100}%`}
      width={`${(region.end - region.start) * 100}%`}
    />
  );
};

export default Region;
