import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Products from '../products/Products';
import { setProducts } from '../../redux/Shopping/shopping-actions';

const Shop = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        const errorMessage = `An error has occured: ${response.status}`;
        throw new Error(errorMessage);
      }
      const items = await response.json();
      dispatch(setProducts(items));
    } catch (e) {
      alert(e);
      return null;
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div>
      {loading && <h1>Fetching Data...</h1>}
      {!loading && <Products />}
    </div>
  );
};

export default Shop;
