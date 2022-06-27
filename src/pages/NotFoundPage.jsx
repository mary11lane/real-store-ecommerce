import React from "react";
import { Link } from "react-router-dom";
import { FaMapSigns } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const NotFoundPage = () => {
  return (
    <main>
      <section className='text-darkgray mt-20'>
        <div className='flex justify-center mb-10'>
          <FaMapSigns size={100} />
        </div>
        <p className='text-center'>This page does not exist</p>
        <p className='text-center'>Let me take you back home</p>
        <Link to='/'>
          <div className='flex justify-center drop-shadow-md mt-4'>
            <AiFillHome size={30} />
          </div>
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
