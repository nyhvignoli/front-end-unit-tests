import { useState } from "react";
import { Wrapper } from "./styles";

const Content = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <Wrapper>
      <button onClick={decrease} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </Wrapper>
  );
};

export default Content;
