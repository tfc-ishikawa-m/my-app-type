import { User } from "../chap08-04-01/type";

const Child = ({ id, name, email, address = "Unregistered" }: User) => {
  return (
    <div>
      <p>ID:{id}</p>
      <p>name:{name}</p>
      <p>email:{email}</p>
      <p>address:{address}</p>
    </div>
  );
};

export default Child;
