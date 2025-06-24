import Child from "./Child";

const Page0107 = () => {
  const input = {
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
