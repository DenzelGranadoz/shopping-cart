import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/logo.png';

const Header = () => {
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
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
