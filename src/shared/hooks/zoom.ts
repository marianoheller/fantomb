import { useObservable, useObservableCallback } from "observable-hooks";
import { RefObject, useEffect } from "react";
import { merge } from "rxjs";
import {
  distinctUntilChanged,
  map,
  scan,
  tap,
  throttleTime,
} from "rxjs/operators";
import * as mouse from "../operators/mouse";

const parseZoomValue = ({
  deltaX,
  deltaY,
}: React.WheelEvent<Element>): number => {
  const sign = [Math.sign(deltaX), Math.sign(deltaY)]
    .filter(Math.abs)
    .reduce((acc, v) => acc * v, 1);
  const d = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  return d * sign * -1;
};

export const INITIAL_ZOOM = 1;
export const BASE = 1.02;
export const SENSITIVITY = 0.01;

export const useZoom = (ref: RefObject<Element>) => {
  useEffect(
    () => ref.current?.addEventListener("wheel", (e) => e.preventDefault()),
    [ref]
  );

  const [onWheel, wheel$] = useObservableCallback<React.WheelEvent<Element>>(
    (e$) => e$
  );

  const [resetZoom, resetZoom$] = useObservableCallback<number, void>((e$) =>
    e$.pipe(map(() => INITIAL_ZOOM))
  );

  const zoom$ = useObservable(() =>
    merge(
      resetZoom$,
      wheel$.pipe(
        throttleTime(20),
        /*  tap((e) => {
          if (!ref.current) return;
          const svgWidth = ref.current.getBoundingClientRect().width;
          const divWidth =
            ref.current.parentElement?.getBoundingClientRect().width ||
            svgWidth;
          const scrollVal = (e.clientX / divWidth) * divWidth;
          ref.current.parentElement?.scroll({
            left: scrollVal,
            behavior: "smooth",
          });
          console.warn("EVENT", scrollVal);
        }), */
        map(parseZoomValue),
        distinctUntilChanged(),
        scan(
          (acc, v) => {
            const exp = acc.exp + v * SENSITIVITY;
            const zoom = Math.max(INITIAL_ZOOM, Math.pow(BASE, exp));
            return { zoom, exp: Math.max(1, exp) };
          },
          { zoom: INITIAL_ZOOM, exp: 1 }
        ),
        map(({ zoom }) => zoom)
      )
    )
  );

  return { zoom$, onWheel, resetZoom };
};
