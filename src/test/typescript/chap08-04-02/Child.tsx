import { Product } from "./types";
type productList = {
  products: Product[];
};

const Child = ({ products }: productList) => {
  return (
    <div>
      {products.map((velue, index) => (
        <div key={index}>
          <p>ProductID:{velue.id}</p>
          <p>ProductName:{velue.name}</p>
          <p>ProductPrice:{velue.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Child;
