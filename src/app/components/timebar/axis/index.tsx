import React, { useMemo } from "react";
import styled from "styled-components";
import { scaleTime } from "d3-scale";
import format from "date-fns/format";
import { useWindowSize } from "../../../../shared/hooks/browser";
import { useObservableState } from "observable-hooks";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface AxiosProps {
  duration$: Observable<number>;
}

const Foreign = styled.foreignObject`
  width: 100%;
  height: 0.5rem;
  font-size: 0.33rem;
  // y
`;

const Wrapper = styled.div<{ xmlns: string }>`
  display: flex;
  justify-content: space-between;
`;

const Tick = styled.span``;

function toDateTime(secs: number | undefined) {
  var t = new Date(1970, 0, 1);
  if (secs) t.setSeconds(secs);
  return t;
}

const formatTick = (d: Date): string => {
  if (d.getHours() > 0) return format(d, "HH:mm:ss");
  return format(d, "mm:ss");
};

const Axis: React.FC<AxiosProps> = ({ duration$ }) => {
  const windowSize = useWindowSize();
  const [scale] = useObservableState(() =>
    duration$.pipe(
      map((d) =>
        scaleTime()
          .domain([toDateTime(0), toDateTime(d)])
          .range([0, 100])
      )
    )
  );

  const Ticks = useMemo(
    () =>
      scale
        ?.ticks()
        .map((tick) => <Tick key={tick.valueOf()}>{formatTick(tick)}</Tick>),
    [scale]
  );

  return (
    <Foreign key={String(windowSize)}>
      <Wrapper xmlns="http://www.w3.org/1999/xhtml">{Ticks}</Wrapper>
    </Foreign>
  );
};

export default Axis;
