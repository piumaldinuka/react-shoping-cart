//Your goal as the new technical lead is to do the following:
//-Create an application where the user can see a menu of the available inventory
//-Allow the user to select the items he wants to purchase into a shopping cart
//-Allow the user to update the number of items in the shopping cart
//-Allow the user to delete items from the shopping car

import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState([
    { name: "bacon", unitPrice: 10.99, quantity: 10 },
    { name: "eggs", unitPrice: 3.99, quantity: 10 },
    { name: "cheese", unitPrice: 6.99, quantity: 10 },
    { name: "chives", unitPrice: 1.0, quantity: 10 },
    { name: "wine", unitPrice: 11.99, quantity: 10 },
    { name: "brandy", unitPrice: 17.55, quantity: 10 },
    { name: "bananas", unitPrice: 0.69, quantity: 10 },
    { name: "ham", unitPrice: 2.69, quantity: 10 },
    { name: "tomatoes", unitPrice: 3.26, quantity: 10 },
    { name: "tissue", unitPrice: 8.45, quantity: 10 },
  ]);
  const [selectedItems, setSelectedItems] = useState({});

  const handleSelectItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };

  const handleAddToCart = () => {
    const newCart = inventory.filter((item) => selectedItems[item.name]);
    setCart(newCart);
  };

  const handleUpdateQuantity = (item, quantity) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.name === item.name ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const handleDeleteFromCart = (item) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.name !== item.name));
  };

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {inventory.map((item) => (
          <li key={item.name}>
            <input
              type="checkbox"
              checked={selectedItems[item.name] || false}
              onChange={() => handleSelectItem(item)}
            />
            {item.name} - ${item.unitPrice.toFixed(2)}
          </li>
        ))}
      </ul>
      <button onClick={handleAddToCart}>Add to Cart</button>

      <h1>Shopping Cart</h1>
      <table>
        
          {cart.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.unitPrice.toFixed(2)} x{" "}
            <input
              type="number"
              value={item.quantity || 1}
              onChange={(e) =>
                handleUpdateQuantity(item, parseInt(e.target.value))
              }
              style={{ marginLeft: "10px",marginRight:"10px"  }}
            />
            {item.quantity}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleDeleteFromCart(item)}
            >
              Delete
            </button>
          </li>
         
        ))}
       
        
      </table>
    </div>
  );
}

export default App;
