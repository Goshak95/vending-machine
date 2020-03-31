import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { ProductCard } from "../ProductCard";

export const Window = ({ products }) => {
  console.log(products);
  const renderProducts = () => {
    return products.map(item => {
      return (
        <ProductCard
          key={item.id}
          category={item.category}
          brand={item.brand}
          price={item.price}
          quantity={item.quantity}
          catNumber={item.catNumber}
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

Window.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      brand: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      catNumber: PropTypes.number
    })
  )
};
