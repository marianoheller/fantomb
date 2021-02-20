import React, { useRef } from "react";
import styled from "styled-components";
import {
  BehaviorSubject,
  merge,
  Observable,
  OperatorFunction,
  timer,
} from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import {
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
  takeUntil,
  throttleTime,
  withLatestFrom,
} from "rxjs/operators";
import * as mouse from "../../../shared/operators/mouse";

import { AppState } from "../../state";

import Region, { TRegion } from "./region";
import Axis from "./axis";
import Marker from "./marker";

interface TimebarProps {
  state$: BehaviorSubject<AppState>;
  setRegion: (r: TRegion) => void;
  setProgress: (r: number) => void;
}

const Svg = styled.svg<{ interactable: boolean }>`
  width: 100%;
  height: 2rem;
  background-color: rgb(240, 240, 240);
  cursor: ${({ interactable }) => (interactable ? "pointer" : "auto")};
  pointer-events: ${({ interactable }) => (interactable ? "all" : "none")};
`;

const Timebar: React.FC<TimebarProps> = ({
  state$,
  setRegion,
  setProgress,
}) => {
  const svgRef = useRef(null);
  const [videoLoaded] = useObservableState(() =>
    state$.pipe(map(({ url }) => url !== undefined))
  );
  const appRegion$ = useObservable(() =>
    state$.pipe(
      map((s) => s.region),
      distinctUntilChanged()
    )
  );

  const progress$ = useObservable<number>(() =>
    state$.pipe(map(({ progress }) => progress))
  );

  const duration$ = useObservable<number>(() =>
    state$.pipe(map(({ duration }) => duration), distinctUntilChanged())
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

  useSubscription(leftClick$, setProgress);
  useSubscription(regionEnd$, setRegion);
  useSubscription(regionClear$, setRegion);

  const region$ = useObservable(() => merge(appRegion$, _region$));

  return (
    <>
      <Svg
        ref={svgRef}
        onContextMenu={(e) => e.preventDefault()}
        onClick={_onClick}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        interactable={!!videoLoaded}
      >
        <Marker progress$={progress$} />
        <Region region$={region$} containerRef={svgRef} onRegion={setRegion} />
        <Axis duration$={duration$} />
      </Svg>
    </>
  );
};

export default Timebar;
