import { Product } from "../chap08-04-02/types";

const Child = ({ id, name, price }: Product) => {
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
    </div>
  );
};

export default Child;
