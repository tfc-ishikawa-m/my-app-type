type inputItem<T extends string, K extends number> = {
  text: T;
  num: K;
};
const Child = ({ text, num }: inputItem<string, number>) => {
  return (
    <div>
      <p>{text}</p>
      <p>{num}</p>
    </div>
  );
};

export default Child;
