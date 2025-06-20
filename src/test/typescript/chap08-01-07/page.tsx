import Child from "./Child";

type inputInf<T extends string, K extends number> = {
  text: T;
  num: K;
};

const Page0107 = () => {
  const input: inputInf<string, number> = {
    text: "Hello TypeScript",
    num: 10,
  };
  return (
    <div>
      <Child text={input.text} num={input.num} />
    </div>
  );
};

export default Page0107;
