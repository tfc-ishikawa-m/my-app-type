import Child from "./Child";

const Page0601 = () => {
  const user1 = {
    name: "mami",
  };
  const user2 = {
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
