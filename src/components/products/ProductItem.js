import React from 'react';

const Product = ({ product }) => {
  const { title, image, price, rating } = product;

  return (
    <div className="product">
      <img src={image} alt={title}></img>
      <h5 className="product-title">{title}</h5>
      <h2 className="product-price">$ {price}</h2>
      <p className="rating">Rating: {rating.rate}/5</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
