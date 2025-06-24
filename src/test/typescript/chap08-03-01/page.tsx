import Child from "./Child";

const Page0301 = () => {
  const userInf = {
    name: "Momo",
    age: 20,
  };
  return (
    <div>
      <Child name={userInf.name} age={userInf.age} />
    </div>
  );
};

export default Page0301;
