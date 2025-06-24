import Child from "./Child";
import { User } from "./type";

const Page0401 = () => {
  const userInf: User = {
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
