import React from "react";
import { Routes, Route } from "react-router-dom";
import UserCartPage from "../pages/UserCartPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";

const RoutesComponent = ({ addToCartHandler, cartItems }) => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route
          path='/my-cart'
          element={<UserCartPage cartItems={cartItems} />}
        />
        <Route
          path='/product/:productId'
          element={
            <ProductPage
              cartItems={cartItems}
              addToCartHandler={addToCartHandler}
            />
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default RoutesComponent;
