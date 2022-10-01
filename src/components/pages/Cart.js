import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    if (cart.length > 0) {
      setEmpty(false);
    }
    cart.length > 0 ? setEmpty(false) : setEmpty(true);

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalPrice, setTotalItems, setTotalPrice]);
  return (
    <div className="cart-container">
      {cart.map((item) => (
        <CartItem key={item.id} itemData={item} />
      ))}
      {empty && (
        <div className="cart-empty">
          <h1>Cart is Empty</h1>
          <Link to="/shop">
            <button>Proceed To Shop</button>
          </Link>
        </div>
      )}
      {!empty && (
        <div className="cart-summary">
          <h4>Cart Total</h4>
          <div className="summary-price">
            <span>Total Items: {totalItems}</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
