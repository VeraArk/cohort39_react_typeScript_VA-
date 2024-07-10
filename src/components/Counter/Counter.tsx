import { CounterWrapper, ButtonControl, Count } from "./styles";

import Button from "../Button/Button";

interface CounterProps {
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}

function Counter({ count, onPlus, onMinus }: CounterProps) {
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      {/* Пример работы со стейтом */}
      {/* <button onClick={addAnimal}>Set Animal</button>
      <button onClick={changeUserName}>Change user name</button> */}
    </CounterWrapper>
  );
}

export default Counter;
