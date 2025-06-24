import Child from "./Child";

const Page0401 = () => {
  const userInf = {
    id: 3,
    name: "Yumi",
    email: "yumi@gmail.com",
  };
  return (
    <div>
      <Child id={userInf.id} name={userInf.name} email={userInf.email} />
    </div>
  );
};

export default Page0401;
