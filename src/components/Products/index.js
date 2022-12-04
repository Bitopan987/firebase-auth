import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import CATEGORIES from './constants';
import Select from 'react-select';

const Products = () => {
  let PRODUCTS = data[0].ProductsData;
  const [products, setProducts] = useState(PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (e) => {
    const val = e.target.value;
    const filtered = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(val.toLowerCase())
    );
    setProducts(filtered);
  };

  const filterProducts = () => {
    const filtered = PRODUCTS.filter((hotel) => condition(hotel));
    setProducts(filtered);
  };

  const condition = (product) => {
    const categoryCondition = selectedCategory
      ? product.category
          .toLowerCase()
          .includes(selectedCategory.value.toLowerCase())
      : true;
    console.log(categoryCondition, selectedCategory, 'test');
    return categoryCondition;
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategory]);

  return (
    <section className="pt-30 px-20">
      <div className="pt-24 mb-8 flex justify-between items-center">
        <div className="flex items-center ">
          <h2 className="text-2xl mb-2 mr-4 font-bold  text-gray-400">
            Search Products here :
          </h2>
          <input
            type="text"
            className="block w-[24rem] py-2 px-3 border border-gray-400 rounded-md"
            placeholder="Enter Product Name"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>
        <div className="flex items-center mr-4">
          <h2 className="text-2xl mb-2 mr-4 font-bold  text-gray-400">
            Search by Category :
          </h2>
          <Select
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            options={CATEGORIES}
          />
        </div>
      </div>
      <div className="flex justify-left flex-wrap">
        {products.length ? (
          products.map((products) => <Product {...products} />)
        ) : (
          <div>
            <h1 className="font-normal text-2xl">No Results Found</h1>
          </div>
        )}
      </div>
    </section>
  );
};

function Product(props) {
  return (
    <div className="bg-slate-100 w-[24rem] rounded-md shadow-md m-3 px-6 py-4">
      <img className="w-full py-2 h-80" src={props.cover} alt={props.title} />
      <div className="product-item-details">
        <p className="font-normal text-gray-400 text-xl">{props.name}</p>
        <div className="flex items-center">
          <span className="mr-4 font-semibold text-gray-700 text-xl">
            Rs {props.price}
          </span>
          <del className="mr-2 text-xl text-gray-400 ">Rs{props.mrp}</del>
          <p className="text-green-600 font-semibold">{props.discount} off</p>
        </div>
        <button className="btn-blue mt-4">Add To Cart </button>
      </div>
    </div>
  );
}

export default Products;
