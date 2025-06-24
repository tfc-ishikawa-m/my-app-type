import Child from "./Child";

export type User = {
  name: string;
  age?: number | "Not provided";
};
const Page0601 = () => {
  const user1: User = {
    name: "mami",
  };
  const user2: User = {
    name: "mana",
    age: 16,
  };
  return (
    <div>
      <Child name={user1.name} />
      <Child name={user2.name} age={user2.age} />
    </div>
  );
};

export default Page0601;
