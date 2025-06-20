import { useState } from "react";

const Page0102 = () => {
  const [countNum, setCountNum] = useState<number>(0);
  const onClickButton = () => {
    setCountNum((prev) => prev + 1);
  };
  return (
    <div>
      <p>count:{countNum}</p>
      <button onClick={onClickButton}>+</button>
    </div>
  );
};

export default Page0102;
