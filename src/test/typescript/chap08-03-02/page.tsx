import Child from "./Child";

type fruitsList = string[];
const Page0302 = () => {
  const fruits: fruitsList = ["Apple", "banana", "orange"];
  return (
    <div>
      <Child fruits={fruits} />
    </div>
  );
};

export default Page0302;
