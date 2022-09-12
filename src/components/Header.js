import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/logo.png';
import { connect } from 'react-redux';

const Header = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo"></img>
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
          <span>{cartCount}</span>
        </Link>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
