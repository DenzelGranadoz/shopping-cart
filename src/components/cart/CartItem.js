import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  removeFromCart,
  adjustQty,
} from '../../redux/Shopping/shopping-actions';

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
  const { title, image, price, description, qty, id } = itemData;
  const [input, setInput] = useState(qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(id, e.target.value);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={title}></img>
      <div className="cart-item-info">
        <h1>{title}</h1>
        <h3>${price}</h3>
        <p>{description}</p>
      </div>
      <div className="cart-item-events">
        <label htmlFor="qty">Quantity:</label>
        <input
          min="1"
          id="qty"
          name="qty"
          value={input}
          type="number"
          onChange={onChangeHandler}
        />

        <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
