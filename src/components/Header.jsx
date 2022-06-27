import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";

const Header = ({ cartItems }) => {
  return (
    <main>
      <section className='flex flex-col justify-center items-center mt-2 drop-shadow-md'>
        <div className='flex flex-row'>
          <div className='text-7xl font-bold font-heading m-2 flex justify-center items-center'>
            real
          </div>
          <div className='text-2xl mt-8'>store</div>
        </div>
        <div className='bg-skyblue w-full pt-2 pb-2 flex flex-row justify-center items-center text-white font-bold'>
          <Link to='/'>
            <div className='mr-10 drop-shadow-md'>
              <AiFillHome size={30} />
            </div>
          </Link>
          <Link to='/my-cart'>
            <div className='drop-shadow-md'>
              <BsFillCartFill size={30} />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Header;
