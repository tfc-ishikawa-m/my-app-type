import { User } from "./type";

const Child = ({ id, name, email }: User) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Child;
