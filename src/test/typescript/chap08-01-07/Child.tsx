type inputItem<T extends string | number> = {
  text: T;
  num: T;
};
const Child = ({ text, num }: inputItem<string | number>) => {
  return (
    <div>
      <p>{text}</p>
      <p>{num}</p>
    </div>
  );
};

export default Child;
