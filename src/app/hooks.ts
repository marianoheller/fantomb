import { useObservable } from "observable-hooks";
import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { AppState } from "./state";

export const usePartitionedState = (state$: BehaviorSubject<AppState>) => {
  const status$ = useObservable(() =>
    state$.pipe(
      map((s) => s.status),
      distinctUntilChanged()
    )
  );

  const url$ = useObservable(() =>
    state$.pipe(
      map((s) => s.url),
      distinctUntilChanged()
    )
  );

  const duration$ = useObservable(() =>
    state$.pipe(
      map((s) => s.duration),
      distinctUntilChanged()
    )
  );

  const progress$ = useObservable(() =>
    state$.pipe(
      map((s) => s.progress),
      distinctUntilChanged()
    )
  );

  const region$ = useObservable(() =>
    state$.pipe(
      map((s) => s.region),
      distinctUntilChanged()
    )
  );

  const playerRef$ = useObservable(() =>
    state$.pipe(
      map((s) => s.playerRef),
      distinctUntilChanged()
    )
  );

  return { status$, url$, duration$, progress$, region$, playerRef$ };
};
