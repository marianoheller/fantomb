import React, { RefObject, useRef } from "react";
import { combineLatest, merge, Observable, of } from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import styled from "styled-components";

import * as mouse from "../../../shared/operators/mouse";
import {
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs/operators";
import { useRegionDrag, useRegionResize } from "./hooks";

const Rect = styled.rect`
  height: 100%;
  fill: rgba(0, 0, 0, 0.25);
  stroke: rgba(0, 0, 0, 0.25);
  cursor: all-scroll;
`;

const Border = styled.rect`
  height: 100%;
  width: 1px;
  fill: rgba(0,0,0,0.5);
  cursor: col-resize;
`;

export type TRegion = { start: number; end: number } | undefined;

export interface RegionProps {
  region$: Observable<TRegion>;
  containerRef: RefObject<SVGSVGElement>;
  onRegion: (r: TRegion) => void;
}

const Region: React.FC<RegionProps> = (props) => {
  const { region$, containerRef, onRegion } = props;
  const drag = useRegionDrag(props);
  const resizeStart = useRegionResize({ ...props, key: "start" });
  const resizeEnd = useRegionResize({ ...props, key: "end" });

  const [region] = useObservableState<TRegion>(
    () =>
      merge(
        region$,
        drag.updatedRegion$,
        resizeStart.updatedRegion$,
        resizeEnd.updatedRegion$
      ),
    undefined
  );

  if (region === undefined) return null;
  return (
    <>
      <Rect
        onClick={(e) => e.stopPropagation()}
        onMouseDown={drag.onMouseDown}
        x={`${region.start * 100}%`}
        width={`${(region.end - region.start) * 100}%`}
      />
      <Border
        x={`${region.start * 100}%`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={resizeStart.onMouseDown}
      />
      <Border
        x={`${region.end * 100}%`}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={resizeEnd.onMouseDown}
      />
    </>
  );
};

export default Region;
