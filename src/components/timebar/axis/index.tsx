import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { axisBottom } from "d3-axis";
import { scaleLinear, scaleTime } from "d3-scale";
import format from "date-fns/format";
import { useWindowSize } from "../../../shared/hooks/browser";

interface AxiosProps {
  duration: number | undefined;
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

const Axis: React.FC<AxiosProps> = ({ duration }) => {
  const windowSize = useWindowSize();
  const scale = useMemo(
    () =>
      scaleTime()
        .domain([toDateTime(0), toDateTime(duration)])
        .range([0, 100]),
    [duration]
  );

  const Ticks = useMemo(
    () =>
      scale
        .ticks()
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
