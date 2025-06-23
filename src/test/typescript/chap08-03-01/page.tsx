import Child from "./Child";
type User = {
  name: string;
  age: number;
};
const Page0301 = () => {
  const userInf: User = {
    name: "Momo",
    age: 20,
  };
  return (
    <div>
      <Child />
    </div>
  );
};

export default Page0301;
