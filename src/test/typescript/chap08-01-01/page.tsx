import Child from "./Child";

interface User {
  name: string;
}

const Page0101 = () => {
  const userName: User = {
    name: "Alice",
  };
  return (
    <div>
      <Child name={userName.name} />
    </div>
  );
};

export default Page0101;
