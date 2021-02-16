import React, { RefObject, useRef } from "react";
import { combineLatest, merge, Observable, of } from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import styled from "styled-components";

import * as mouse from "../../shared/operators/mouse";
import {
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom,
} from "rxjs/operators";

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
  containerRef: RefObject<SVGSVGElement>;
  onRegion: (r: TRegion) => void;
}

const Region: React.FC<RegionProps> = ({ region$, containerRef, onRegion }) => {
  const refRect = useRef<SVGRectElement>(null);

  const [onMouseDown, mouseDown$] = useObservableCallback<
    React.MouseEvent<SVGRectElement, MouseEvent>
  >((e$) => e$.pipe(map(mouse.stopPropagation)));

  const mouseDrag$ = useObservable(() =>
    mouseDown$.pipe(
      map(mouse.preventDefault),
      switchMap((md) =>
        mouse.globalMouseMove$.pipe(
          map((mm) => {
            mm.preventDefault();
            if (!containerRef.current) return 0;
            const dim = containerRef.current.getBoundingClientRect();
            const deltaX = mm.clientX - md.clientX;
            return deltaX / dim.width;
          }),
          takeUntil(mouse.globalMouseUp$)
        )
      )
    )
  );

  const updatedRegion$ = useObservable<TRegion>(() =>
    mouseDrag$.pipe(
      withLatestFrom(region$),
      map(([delta, r]) => {
        if (!r) return r;
        return { end: r.end + delta, start: r.start + delta };
      })
    )
  );

  const finishedUpdating$ = useObservable<TRegion>(() =>
    updatedRegion$.pipe(
      switchMap((r) =>
        mouse.globalMouseUp$.pipe(
          take(1),
          map(() => r)
        )
      )
    )
  );

  useSubscription(finishedUpdating$, onRegion);
  const [region] = useObservableState<TRegion>(
    () => merge(region$, updatedRegion$),
    undefined
  );

  if (region === undefined) return null;
  return (
    <Rect
      ref={refRect}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={onMouseDown}
      x={`${region.start * 100}%`}
      width={`${(region.end - region.start) * 100}%`}
    />
  );
};

export default Region;
