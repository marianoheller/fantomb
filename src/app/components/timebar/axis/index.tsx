import React from "react";
import styled from "styled-components";
import format from "date-fns/format";
import { useObservable, useObservableState } from "observable-hooks";
import { combineLatest, Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

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
  font-size: 0.33rem;
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
      startWith(100),
      map((z) => Math.round(z / 10))
    )
  );

  const [Ticks] = useObservableState(() =>
    combineLatest([duration$, idealTickCount$]).pipe(
      map(([duration, idealTickCount]) => {
        if (!duration) return null;
        const fraction = duration / idealTickCount;
        const segment = scales.find((s) => s >= fraction) || 3840;
        const tickCount = Math.floor(duration / segment);
        console.warn("GOT", idealTickCount, fraction, segment, tickCount);
        return [...Array(tickCount).keys()].map((i) => {
          const x = (100 * i) / tickCount;
          const tick = toDateTime(segment * i);
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
