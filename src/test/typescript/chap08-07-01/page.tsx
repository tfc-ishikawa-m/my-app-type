import Child from "./Child";

const Page0701 = () => {
  const userInf1 = {
    id: 1,
    name: "Mayu",
    email: "mayu@gmail.com",
    address: "Tokyo",
  };
  const userinf2 = {
    id: 2,
    name: "Alice",
    email: "alice@gmail.com",
  };
  return (
    <div>
      <Child
        id={userInf1.id}
        name={userInf1.name}
        email={userInf1.email}
        address={userInf1.address}
      />
      <Child id={userinf2.id} name={userinf2.name} email={userinf2.email} />
    </div>
  );
};

export default Page0701;
