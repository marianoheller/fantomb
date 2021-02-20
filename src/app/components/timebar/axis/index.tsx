import React from "react";
import styled from "styled-components";
import { scaleTime } from "d3-scale";
import format from "date-fns/format";
import { useWindowSize } from "../../../../shared/hooks/browser";
import {
  useObservable,
  useObservableState,
} from "observable-hooks";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface AxiosProps {
  duration$: Observable<number>;
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

const TICK_COUNT = 10;

const Axis: React.FC<AxiosProps> = ({ duration$ }) => {
  const windowSize = useWindowSize();
  const scale$ = useObservable(() =>
    duration$.pipe(
      map((d) => {
        if (!d) return undefined;
        return scaleTime()
          .domain([toDateTime(0), toDateTime(d)])
          .range([0, 100]);
      })
    )
  );

  const [Ticks] = useObservableState(() =>
    scale$.pipe(
      map((scale) => {
        if (!scale) return null;
        const ticks = scale.ticks(TICK_COUNT);
        return ticks.map((tick, i) => {
          const x = (100 * i) / TICK_COUNT;
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

  return <Group key={String(windowSize)}>{Ticks}</Group>;
};

export default Axis;
