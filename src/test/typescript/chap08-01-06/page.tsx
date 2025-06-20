import Child from "./Child";
type FruitsList<T extends [string, string, string]> = {
  val: T;
};

const Page0106 = () => {
  const friuts: FruitsList<[string, string, string]> = {
    val: ["Apple", "Banana", "Cherry"],
  };
  return (
    <div>
      <Child fruit={friuts.val} />
    </div>
  );
};

export default Page0106;
