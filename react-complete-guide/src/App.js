import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product';
import products from './Product/ProductData';

const App = () => {
  const productsData = products.map(item => {
    return(
    <Product
      keys={item.id}
      product={item}
    />
    );
  })


  return (
    <div>{productsData}</div>
  )
}

export default App;
