import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ReactLoading from "react-loading";

const ProductPage = ({ addToCartHandler }) => {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const [cartData, setCartData] = useState();
  const [dataFetched, setDataFetched] = useState(false);

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/" + productId
    );
    const { title, price, description, image, id } = data;
    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImage(image);
    setId(id);
    setCartData({ title, id, image, price });
    setDataFetched(true);
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <main>
      <Header className='relative' />
      {!dataFetched ? (
        <div className='flex justify-center'>
          <ReactLoading
            type={"cylon"}
            color={"#94d2bd"}
            height={"20%"}
            width={"20%"}
          />
        </div>
      ) : (
        <section className='m-10 flex flex-row justify-center'>
          <div className='relative aspect-square w-[1000px] p-4 bg-white border-2 border-skyblue lg:w-[400px]'>
            <img
              src={image}
              alt='product-image'
              className='flex items-center'
            />
          </div>
          <div
            key={id}
            className='aspect-square w-[1000px] p-4 bg-skyblue relative lg:w-[400px]'
          >
            <h1 className='font-bold text-sm md:text-base'>{title}</h1>
            <p className='text-xs md:text-sm'>$ {price.toFixed(2)}</p>
            <div className='mt-4 text-[0.55rem] md:text-xs lg:text-sm'>
              {description}
            </div>
            <button
              onClick={() => addToCartHandler(cartData)}
              type='button'
              className='w-[200px] bg-yellow text-xs rounded-lg font-bold drop-shadow-md m-auto absolute bottom-5 left-0 right-0 hover:opacity-80 p-2 lg:w-[300px] lg:p-4'
            >
              Add to cart
            </button>
          </div>
        </section>
      )}
      <Footer className='flex justify-center m-auto' />
    </main>
  );
};

export default ProductPage;
