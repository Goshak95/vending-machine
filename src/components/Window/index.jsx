import React from "react";
import "./styles.scss";
import data from "./productsData.json";
import { ProductCard } from "../ProductCard";
console.log(data);
export const Window = props => {
  const renderProducts = () => {
    return data.map(item => {
      return (
        <ProductCard
          key={item.id}
          category={item.category}
          brand={item.brand}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
  };
  return (
    <div className="window">
      <div className="window__cards-wrapper">{renderProducts()}</div>
    </div>
  );
};
