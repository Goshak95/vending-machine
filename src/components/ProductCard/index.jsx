import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const ProductCard = ({
  category,
  brand,
  quantity,
  catNumber,
  price
}) => {
  return (
    <div className="card">
      <div className="card__right">
        <p className="card__brand">{brand}</p>
        <p>{category}</p>
        <p>{price} ₽</p>
      </div>
      <div className="card__left">
        <div className="card__number">{catNumber}</div>
        <div className="card__quantity">{`Quantity: ${quantity}`}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  category: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  catNumber: PropTypes.number
};
