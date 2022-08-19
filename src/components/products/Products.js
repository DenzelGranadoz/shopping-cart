import React from 'react';
import Product from './ProductItem';

const Products = ({ products, handleAdd }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  );
};

export default Products;
