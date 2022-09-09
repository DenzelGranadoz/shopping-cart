import React from 'react';
import Product from './ProductItem';
import { connect } from 'react-redux';

const Products = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
