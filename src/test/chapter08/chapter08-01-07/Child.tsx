type TextType<T, K> = {
  text: T;
  num: K;
};

type ChildProps<T, K> = {
  textObj: TextType<T, K>;
};

const Child = <T extends string, K extends number>({
  textObj,
}: ChildProps<T, K>) => {
  return (
    <div>
      <p>{textObj.text}</p>
      <p>{textObj.num}</p>
    </div>
  );
};

export default Child;
