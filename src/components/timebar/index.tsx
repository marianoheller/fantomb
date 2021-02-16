import React, { useRef } from "react";
import { merge, Observable, OperatorFunction, timer } from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import {
  debounceTime,
  filter,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime,
  withLatestFrom,
} from "rxjs/operators";
import styled from "styled-components";
import * as mouse from "../../shared/operators/mouse";

import Region, { TRegion } from "./region";

interface TimebarProps {
  duration$: Observable<number | undefined>;
  progress: Observable<number>;
  onClick: (x: number) => void;
  onRegion: (r: TRegion) => void;
  appRegion$: Observable<TRegion>;
}

const Svg = styled.svg<{ interactable: boolean }>`
  width: 100%;
  height: 2rem;
  background-color: rgb(240, 240, 240);
  cursor: ${({ interactable }) => (interactable ? "pointer" : "auto")};
  pointer-events: ${({ interactable }) => (interactable ? "all" : "none")};
`;

const Marker = styled.rect`
  width: 1px;
  height: 100%;
  fill: rgb(10, 10, 10);
`;

const Timebar: React.FC<TimebarProps> = ({
  duration$,
  progress,
  onClick,
  onRegion,
  appRegion$,
}) => {
  const svgRef = useRef(null);
  const duration = useObservableState(duration$);
  const [markerPosition] = useObservableState<string>(
    () =>
      progress.pipe(
        map((v) => {
          if (!v) return "0px";
          return `${v * 100}%`;
        })
      ),
    "0px"
  );

  const [onWheel, wheel$] = useObservableCallback<
    React.MouseEvent<SVGSVGElement, WheelEvent>
  >((e$) =>
    e$.pipe(
      map((e) => {
        e.stopPropagation();
        return e;
      })
    )
  );

  const [onMouseDown, mouseDown$] = useObservableCallback<
    React.MouseEvent<SVGSVGElement, MouseEvent>
  >((e$) => e$.pipe(map(mouse.preventDefault)));

  const [onMouseUp, mouseUp$] = useObservableCallback<
    React.MouseEvent<SVGSVGElement, MouseEvent>
  >((e$) => e$.pipe(map(mouse.preventDefault)));

  const mousePosRelative$ = mouse.globalMouseMove$.pipe(
    map(mouse.globalMouseEventToXDistance(svgRef)),
    filter((v) => v !== undefined) as OperatorFunction<
      number | undefined,
      number
    >
  );

  const [_onClick, click$] = useObservableCallback<
    React.MouseEvent<SVGSVGElement, MouseEvent>
  >((e$) => e$);

  const leftClick$ = click$.pipe(
    filter((e) => e.button === 0),
    map(mouse.globalMouseEventToXDistance(svgRef))
  );

  const rightClick$ = mouseDown$.pipe(
    filter((e) => e.button === 2),
    throttleTime(500)
  );

  const holdClick$ = mouseDown$.pipe(
    switchMap((e) =>
      timer(100).pipe(
        takeUntil(mouseUp$),
        map(() => mouse.globalMouseEventToXDistance(svgRef)(e))
      )
    )
  );

  const regionClear$ = rightClick$.pipe(map(() => undefined));

  const _region$: Observable<TRegion> = merge(
    holdClick$.pipe(
      switchMap((x1) =>
        mousePosRelative$.pipe(
          map((x2) => {
            if (x1 > x2) return { start: x2, end: x1 };
            else return { start: x1, end: x2 };
          }),
          takeUntil(mouseUp$)
        )
      )
    ),
    regionClear$
  );

  const regionEnd$ = holdClick$.pipe(
    switchMap(() => mouseUp$.pipe(take(1))),
    withLatestFrom(_region$),
    map(([_, r]) => r)
  );

  useSubscription(leftClick$, onClick);
  useSubscription(regionEnd$, onRegion);
  useSubscription(regionClear$, onRegion);
  useSubscription(wheel$, () => console.warn("WHEEL"));

  const region$ = useObservable(() => merge(appRegion$, _region$));

  return (
    <>
      <Svg
        ref={svgRef}
        onContextMenu={(e) => e.preventDefault()}
        onClick={_onClick}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onWheel={onWheel}
        interactable={duration !== undefined}
      >
        <Marker x={markerPosition} />
        <Region region$={region$} containerRef={svgRef} onRegion={onRegion} />
      </Svg>
    </>
  );
};

export default Timebar;
