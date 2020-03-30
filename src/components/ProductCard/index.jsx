import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const ProductCard = ({ category, brand, quantity, price }) => {
  return (
    <div className="card">
      <p className="card__brand">{brand}</p>
      <p>{category}</p>
      <p>{price} ₽</p>
      <div className="card__quantity">{quantity}</div>
    </div>
  );
};

ProductCard.propTypes = {
  category: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number
};
