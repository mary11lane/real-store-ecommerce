import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ imageUrl, price, title, category, id }) => {
  return (
    <Link to={`product/${id}`}>
      <div className='aspect-square p-6 ml-4 mr-4 mt-4 bg-white border-2 border-skyblue hover:opacity-80'>
        <img
          src={imageUrl}
          alt='product-image'
          className='w-full h-full object-contain'
        />
      </div>
      <div className='pl-4 pr-4 pb-4 ml-4 mr-4 mb-4 bg-skyblue'>
        <p className='font-bold'>${price.toFixed(2)}</p>
        <p className='line-clamp-1'>{title}</p>
        <p className='italic text-slate-500'>{category}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
