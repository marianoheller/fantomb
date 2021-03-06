import React, { useRef } from "react";
import styled from "styled-components";
import { merge, Observable, OperatorFunction, timer } from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import {
  filter,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
  throttleTime,
  withLatestFrom,
} from "rxjs/operators";
import * as mouse from "../../../shared/operators/mouse";
import { useZoom } from "../../../shared/hooks/zoom";

import { AppStatus, Url } from "../../state";

import Region, { TRegion } from "./region";
import Axis from "./axis";
import Marker from "./marker";
import Feedback from "./feedback";

interface TimebarProps {
  url$: Observable<Url>;
  status$: Observable<AppStatus>;
  region$: Observable<TRegion>;
  progress$: Observable<number>;
  duration$: Observable<number>;
  setRegion: (r: TRegion) => void;
  setProgress: (r: number) => void;
}

const TimebarWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  position: relative;
`;

type SvgProps = { interactable: boolean; zoom: number };
const svg = styled.svg<SvgProps>``;

const Svg = styled(svg).attrs((props: SvgProps) => ({
  style: {
    width: `${100 * props.zoom}%`,
  },
}))`
  height: 4rem;
  background-color: rgb(240, 240, 240);
  cursor: ${({ interactable }) => (interactable ? "pointer" : "auto")};
  pointer-events: ${({ interactable }) => (interactable ? "all" : "none")};
`;

const Timebar: React.FC<TimebarProps> = ({
  url$,
  status$,
  region$,
  progress$,
  duration$,
  setRegion,
  setProgress,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { onWheel, resetZoom, zoom$ } = useZoom(svgRef);
  const [zoom] = useObservableState(() => zoom$, 100);

  const [videoLoaded] = useObservableState(
    () =>
      url$.pipe(
        tap(() => resetZoom()),
        map((url) => url !== undefined)
      ),
    false
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

  const mergedRegion$ = useObservable(() => merge(region$, _region$));

  return (
    <TimebarWrapper>
      <Svg
        ref={svgRef}
        onContextMenu={(e) => e.preventDefault()}
        onClick={_onClick}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onWheel={onWheel}
        zoom={zoom}
        interactable={videoLoaded}
      >
        <Marker progress$={progress$} status$={status$} />
        <Region
          region$={mergedRegion$}
          containerRef={svgRef}
          onRegion={setRegion}
        />
        <Axis duration$={duration$} zoom$={zoom$} />
      </Svg>
      <Feedback zoom$={zoom$} />
    </TimebarWrapper>
  );
};

export default Timebar;
