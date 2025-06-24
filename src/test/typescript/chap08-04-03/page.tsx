import React from "react";
import { Product } from "../chap08-04-02/types";
import Child from "./Child";

const Page0403 = () => {
  const productList: Product[] = [
    { id: 1, name: "cake", price: 400 },
    { id: 2, name: "cookie", price: 300 },
    { id: 3, name: "candy", price: 200 },
  ];
  const secondProduct = productList.filter((item) => {
    item.id === 2;
    return item;
  });
  return (
    <div>
      {secondProduct.map((item, index) => (
        <Child key={index} id={item.id} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default Page0403;
