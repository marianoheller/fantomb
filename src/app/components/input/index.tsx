import React, { KeyboardEvent } from "react";
import styled from "styled-components";
import {
  useObservable,
  useObservableCallback,
  useSubscription,
} from "observable-hooks";
import { race, timer } from "rxjs";
import { debounce, filter, map } from "rxjs/operators";

interface InputProps {
  onChange: (s: string) => void;
}

const InputWrapper = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 20rem;
  text-align: center;
`;

const Input: React.FC<InputProps> = ({ onChange }) => {
  const [_onChange, onChange$] = useObservableCallback<
    string,
    React.ChangeEvent<HTMLInputElement>
  >((event$) => event$.pipe(map((e) => e.currentTarget.value)));

  const [_onEnter, onEnter$] = useObservableCallback<
    string,
    KeyboardEvent<HTMLInputElement>
  >((event$) =>
    event$.pipe(
      filter((e) => e.key === "Enter"),
      map((e) => e.currentTarget.value)
    )
  );

  const onActualChange$ = useObservable(() =>
    onChange$.pipe(debounce(() => race(timer(1000), onEnter$)))
  );

  useSubscription(onActualChange$, onChange);

  return (
    <InputWrapper>
      <StyledInput
        name="youtube"
        type="text"
        autoComplete="on"
        onChange={_onChange}
        onKeyPress={_onEnter}
      />
    </InputWrapper>
  );
};

export default Input;
