import { Value } from "sass";
import Child from "./Child";
import { Product } from "./types";

const Page0402 = () => {
  const productInf: Product[] = [
    { id: 1, name: "cheek", price: 1000 },
    { id: 2, name: "eyeshadow", price: 1500 },
    { id: 3, name: "Lip", price: 800 },
  ];
  return (
    <div>
      {productInf.map((item, index) => (
        <Child key={index} id={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Page0402;
