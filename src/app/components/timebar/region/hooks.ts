import React, { RefObject } from "react";
import { Observable } from "rxjs";
import {
  useObservable,
  useObservableCallback,
  useSubscription,
} from "observable-hooks";

import * as mouse from "../../../../shared/operators/mouse";
import {
  map,
  switchMap,
  take,
  takeUntil,
  withLatestFrom,
} from "rxjs/operators";

export interface Region {
  start: number;
  end: number;
}
export type TRegion = Region | undefined;

export interface UseRegionDragInput {
  region$: Observable<TRegion>;
  containerRef: RefObject<SVGSVGElement>;
  onRegion: (r: TRegion) => void;
}

export interface UseRegionDragOutput {
  updatedRegion$: Observable<TRegion>;
  onMouseDown: (e: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
}

export const useRegionDrag = ({
  region$,
  containerRef,
  onRegion,
}: UseRegionDragInput): UseRegionDragOutput => {
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
  return { updatedRegion$, onMouseDown };
};

export interface UseRegionResize {
  region$: Observable<TRegion>;
  containerRef: RefObject<SVGSVGElement>;
  onRegion: (r: TRegion) => void;
  key: keyof Region;
}

export interface UseRegionResizeOutput {
  updatedRegion$: Observable<TRegion>;
  onMouseDown: (e: React.MouseEvent<SVGRectElement, MouseEvent>) => void;
}

export const useRegionResize = ({
  region$,
  containerRef,
  onRegion,
  key,
}: UseRegionResize): UseRegionResizeOutput => {
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
        return { ...r, [key]: r[key] + delta };
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
  return { updatedRegion$, onMouseDown };
};
