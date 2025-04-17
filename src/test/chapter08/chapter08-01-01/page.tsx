import Child from "./Child";
interface User {
  name: string;
}

const Type080101 = () => {
  const userName: User = {
    name: "Alice",
  };
  return (
    <div>
      <Child name={userName.name} />
    </div>
  );
};

export default Type080101;
