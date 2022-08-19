import React, { useState, useEffect } from 'react';
import Products from '../products/Products';

const Shop = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        const errorMessage = `An error has occured: ${response.status}`;
        throw new Error(errorMessage);
      }
      const items = await response.json();
      setProducts(items);
    } catch (e) {
      alert(e);
      return null;
    }
    setLoading(false);
  };

  const addToCart = () => {
    fetch('https://fakestoreapi.com/carts')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      {loading && <h1>Fetching Data...</h1>}
      {!loading && <Products products={products} handleAdd={addToCart} />}
    </div>
  );
};

export default Shop;
