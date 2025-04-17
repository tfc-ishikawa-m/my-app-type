import { useState } from "react";

const Type080102 = () => {
  const [count, setCount] = useState<number>(0);
  const onClickButton = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={onClickButton}>+</button>
      <p>Count:{count}</p>
    </div>
  );
};

export default Type080102;
