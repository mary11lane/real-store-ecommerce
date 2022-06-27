import React, { useState } from "react";
import "./index.css";
import RoutesComponent from "./Routes/RoutesComponent.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (cartData) => {
    const currentProduct = cartItems.find((item) => item.id === cartData.id);
    if (currentProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === cartData.id
            ? { ...currentProduct, quantity: currentProduct.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...cartData, quantity: 1 }]);
    }
    alert("Item has been added to cart");
  };

  return (
    <BrowserRouter>
      <RoutesComponent
        addToCartHandler={addToCartHandler}
        cartItems={cartItems}
      />
    </BrowserRouter>
  );
};

export default App;
