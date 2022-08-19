import React from 'react';

const Product = ({ product, handleAdd }) => {
  const { title, image, price, rating } = product;
  return (
    <div className="product">
      <img src={image} alt="product"></img>
      <h5 className="product-title">{title}</h5>
      <h2 className="product-price">$ {price}</h2>
      <p className="rating">Rating: {rating.rate}/5</p>
      <button className="add-to-cart" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
