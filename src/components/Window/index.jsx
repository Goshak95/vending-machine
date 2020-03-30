import React from "react";
import "./styles.scss";
import data from "./productsData.json";
import { ProductCardComponent } from "../ProductCard";
console.log(data);
export const WindowComponent = props => {
  const renderProducts = () => {
    return data.map(item => {
      return (
        <ProductCardComponent
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
