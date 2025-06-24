import { User } from "./page";

const Child = ({ name, age = "Not provided" }: User) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
};

export default Child;
