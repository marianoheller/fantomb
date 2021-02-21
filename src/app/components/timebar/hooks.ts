import { useObservable, useObservableCallback } from "observable-hooks";
import { RefObject, useEffect } from "react";
import { merge } from "rxjs";
import { distinctUntilChanged, map, scan, throttleTime } from "rxjs/operators";
import * as mouse from "../../../shared/operators/mouse";

const parseZoomValue = ({
  deltaX,
  deltaY,
}: React.WheelEvent<Element>): number => {
  const sign = [Math.sign(deltaX), Math.sign(deltaY)]
    .filter(Math.abs)
    .reduce((acc, v) => acc * v, 1);
  const d = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  return d * sign;
};

export const useZoom = (ref: RefObject<Element>) => {
  useEffect(
    () => ref.current?.addEventListener("wheel", (e) => e.preventDefault()),
    [ref]
  );

  const [onWheel, wheel$] = useObservableCallback<React.WheelEvent<Element>>(
    (e$) => e$.pipe(map(mouse.preventDefault))
  );

  const [resetZoom, resetZoom$] = useObservableCallback<number, void>((e$) =>
    e$.pipe(map(() => 100))
  );

  const zoom$ = useObservable(() =>
    merge(
      resetZoom$,
      wheel$.pipe(
        throttleTime(20),
        map(parseZoomValue),
        scan((acc, v) => Math.max(100, v + acc), 100),
        distinctUntilChanged()
      )
    )
  );

  return { zoom$, onWheel, resetZoom };
};
