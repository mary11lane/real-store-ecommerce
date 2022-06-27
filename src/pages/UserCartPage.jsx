import React from "react";
import Header from "../components/Header";
import { BsCartXFill } from "react-icons/bs";

const UserCartPage = ({ cartItems }) => {
  return (
    <main>
      <Header />

      {cartItems.length === 0 ? (
        <section>
          <div className='text-darkgray mt-20'>
            <div className='flex justify-center'>
              <BsCartXFill size={100} />
            </div>
            <p className='text-center mt-10'>Your cart is currently empty</p>
          </div>
        </section>
      ) : (
        <p className='text-center mt-6'>Total cart items: {cartItems.length}</p>
      )}
      <section className='flex flex-col justify-center self-center mt-10 mb-4'>
        {cartItems.map((item) => (
          <div
            className='flex justify-center ml-auto mr-auto mb-6 p-8 text-center bg-skyblue w-1/2 aspect-square w-sm'
            key={item.id}
          >
            <div>
              <div className='font-bold'>{item.title}</div>
              <div>${item.price}</div>
              <div className='pb-4'>quantity: {item.quantity}</div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default UserCartPage;
