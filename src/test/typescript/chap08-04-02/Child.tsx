import { Product } from "./types";

const Child = ({ id, name, price }: Product) => {
  return (
    <div>
      <p>ProductID:{id}</p>
      <p>ProductName:{name}</p>
      <p>ProductPrice:{price}</p>
    </div>
  );
};

export default Child;
