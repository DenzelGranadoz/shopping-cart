import React from 'react';
import './App.css';

function App() {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <div>
      <p>Clean React App</p>
    </div>
  );
}

export default App;
