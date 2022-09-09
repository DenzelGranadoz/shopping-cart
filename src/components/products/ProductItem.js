import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

const Product = ({ product, addToCart }) => {
  const { title, image, price, rating, id } = product;

  return (
    <div className="product">
      <img src={image} alt={title}></img>
      <h5 className="product-title">{title}</h5>
      <h2 className="product-price">$ {price}</h2>
      <p className="rating">Rating: {rating.rate}/5</p>
      <button className="add-to-cart" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
