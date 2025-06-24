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
      <Child products={productInf} />
    </div>
  );
};

export default Page0402;
