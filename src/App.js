import './App.css';
import './api/products';

import { useState, useCallback } from "react";
import Filterform from './components/Filterform';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import products from "./api/products";

function App() {

  const [cartItems, setCartItems] = useState([])

  

  const onAdd = useCallback((product) => {

    const existingItem = cartItems.find(item => item.id === product.id)

    if (existingItem) {
      setCartItems(
      cartItems.map(item => {
        if (item.id === existingItem.id) {
          return {...item, quantity: item.quantity + 1 }
        } else {
          return item 
        }
      })
    )
    } else {
       setCartItems([...cartItems, {...product, quantity: 1 }])
    }  
  }
  )

 const onRemove = targetItem => { 
   setCartItems(cartItems.filter(item => item.id !== targetItem.id))
 }

 

  return (
    <div className="App">
      <Filterform />
      <Catalog onAdd={onAdd} products={products} />
      {cartItems.length > 0 && <Cart onRemove={onRemove} items={cartItems} />}
    </div>
  );
}

export default App;
