import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import { useObservable, useObservableState } from "observable-hooks";
import { combineLatest, Observable } from "rxjs";
import { distinctUntilChanged, map, startWith } from "rxjs/operators";
import { INITIAL_ZOOM } from "../../../../shared/hooks/zoom";

interface AxiosProps {
  duration$: Observable<number>;
  zoom$: Observable<number>;
}

const Group = styled.g`
  transform: translateY(100%);
`;

const Tick = styled.rect`
  height: 100%;
  width: 1px;
  fill: rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
`;

const TickLabel = styled.text`
  font-size: 0.5rem;
  color: black;
`;

function toDateTime(secs: number | undefined) {
  var t = new Date(1970, 0, 1);
  if (secs) t.setSeconds(secs);
  return t;
}

const formatTick = (d: Date): string => {
  if (d.getHours() > 0) return format(d, "HH:mm:ss");
  return format(d, "mm:ss");
};

const INITIAL_QTY = 20;

const scales = [
  1,
  2,
  5,
  10,
  15,
  20,
  30,
  40,
  ...[...Array(20).keys()].map((i) => i * 60),
];

const Axis: React.FC<AxiosProps> = ({ duration$, zoom$ }) => {
  const idealTickCount$ = useObservable(() =>
    zoom$.pipe(
      startWith(INITIAL_ZOOM),
      map((z) => Math.round(z * INITIAL_QTY)),
      distinctUntilChanged()
    )
  );

  const tickCount$ = useObservable(() =>
    combineLatest([duration$, idealTickCount$]).pipe(
      map(([duration, idealTickCount]) => {
        const fraction = duration / idealTickCount;
        const segment = scales.find((s) => s >= fraction) || 3840;
        return Math.floor(duration / segment);
      }),
      distinctUntilChanged()
    )
  );

  const [Ticks] = useObservableState(() =>
    combineLatest([duration$, tickCount$]).pipe(
      map(([duration, tickCount]) => {
        if (!duration) return null;
        return [...Array(tickCount).keys()].map((i) => {
          const x = (100 * i) / tickCount;
          const tick = toDateTime((i * duration) / tickCount);
          const label = formatTick(tick);
          return (
            <g key={tick.valueOf()}>
              <Tick x={`${x}%`} />
              <TickLabel x={`${x}%`} y="-2px" textAnchor="middle">
                {label}
              </TickLabel>
            </g>
          );
        });
      })
    )
  );

  return <Group>{Ticks}</Group>;
};

export default Axis;
