import Child from "./Child";

type TextType<T extends string, K extends number> = {
  text: T;
  num: K;
};
//タプルで書く場合
// type TextType2<T extends string, K extends number> = [T, K];
const Type080107 = () => {
  const obj: TextType<string, number> = {
    text: "Hello TypeScript",
    num: 10,
  };
  return (
    <div>
      <Child<string, number> textObj={obj} />
    </div>
  );
};

export default Type080107;
