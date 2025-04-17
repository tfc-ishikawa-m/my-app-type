import Child from "./Child";
type Size = {
  size: string;
};
const Type080105 = () => {
  const sizeView: Size = {
    size: "large",
  };
  return (
    <div>
      <Child size={sizeView.size} />
    </div>
  );
};

export default Type080105;
