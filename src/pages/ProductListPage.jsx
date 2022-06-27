import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import ReactLoading from "react-loading";
import { FaFilter } from "react-icons/fa";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchAllProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    setProducts(data);
    setDataFetched(true);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const filterCategory = (categoryItem) => {
    const result = products.filter((currentList) => {
      return currentList.category === categoryItem;
    });
    setFilteredProducts(result);
  };

  return (
    <main>
      <Header />
      <div className='bg-white font-bold text-darkgray drop-shadow-md mb-10 pt-4 pb-4 pl-4 pr-4 lg:flex justify-evenly lg:bg-transparent'>
        <p className='w-full mt-3 flex justify-center lg:w-1/6'>
          <span className='mt-1'>
            <FaFilter size={20} />
          </span>
          Filter products:
        </p>
        <button
          type='button'
          onClick={() => setFilteredProducts(products)}
          className='w-full font-bold hover:bg-skyblue pt-1 pb-1 lg:w-1/6 lg:m-2 lg:bg-white lg:text-darkgray lg:rounded-md lg:hover:text-darkgray'
        >
          All
        </button>
        <button
          type='button'
          onClick={() => filterCategory("electronics")}
          className='w-full font-bold hover:bg-skyblue lg:w-1/6 lg:m-2 lg:bg-white lg:rounded-md drop-shadow-md hover:text-darkgray'
        >
          electronics
        </button>
        <button
          type='button'
          onClick={() => filterCategory("jewelery")}
          className='w-full font-bold hover:bg-skyblue lg:w-1/6 lg:m-2 lg:bg-white lg:rounded-md drop-shadow-md hover:text-darkgray'
        >
          jewelery
        </button>
        <button
          type='button'
          onClick={() => filterCategory("women's clothing")}
          className='w-full font-bold hover:bg-skyblue lg:w-1/6 lg:m-2 lg:bg-white lg:rounded-md drop-shadow-md hover:text-darkgray'
        >
          women's clothing
        </button>
        <button
          type='button'
          onClick={() => filterCategory("men's clothing")}
          className='w-full font-bold hover:bg-skyblue lg:w-1/6 lg:m-2 lg:bg-white lg:rounded-md drop-shadow-md hover:text-darkgray'
        >
          men's clothing
        </button>
      </div>
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
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
          {filteredProducts.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
        </section>
      )}
      <Footer />
    </main>
  );
};

export default ProductListPage;
