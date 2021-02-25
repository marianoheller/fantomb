import React from "react";
import styled from "styled-components";
import { Observable, timer } from "rxjs";
import { useObservable, useObservableState } from "observable-hooks";
import { map, switchMap, take, filter } from "rxjs/operators";

type FeedbackProps = {
  zoom$: Observable<number>;
};

type ContainerProps = { opacity: number };

const _Container = styled.div<ContainerProps>``;

const Container = styled(_Container).attrs((props: ContainerProps) => ({
  style: {
    opacity: props.opacity,
  },
}))`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  pointer-events: none;
  padding-top: 0.125rem;
  padding-right: 0.125rem;
`;

const Text = styled.span`
  font-size: 0.75rem;
`;

const OPACITY_STEPS = 10;

const Feedback: React.FC<FeedbackProps> = ({ zoom$ }) => {
  const opacity$ = useObservable(() =>
    zoom$.pipe(
      filter((z) => z !== 1),
      switchMap((z) =>
        timer(0, 100).pipe(
          take(OPACITY_STEPS),
          map((i) => (OPACITY_STEPS - (1 + i)) / OPACITY_STEPS)
        )
      )
    )
  );
  const [opacity] = useObservableState(() => opacity$, 0);
  const [zoom] = useObservableState(() => zoom$);

  return (
    <Container opacity={opacity}>
      <Text>{`x${zoom?.toFixed(2)}`}</Text>
    </Container>
  );
};

export default Feedback;
