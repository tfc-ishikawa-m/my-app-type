import Child from "./Child";

type FruitsList<T extends [string, string, string]> = {
  val: T;
};
const Type080106 = () => {
  const fruits: FruitsList<[string, string, string]> = {
    val: ["Apple", "Banana", "Cherry"],
  };
  return (
    <>
      <Child fruits={fruits.val} />
    </>
  );
};

export default Type080106;
