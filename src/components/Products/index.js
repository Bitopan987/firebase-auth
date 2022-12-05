import React, { useCallback, useEffect, useState } from 'react';

import data from '../../data/data.json';
import CATEGORIES from './constants';

import Select from 'react-select';

import Product from './Product';

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

  const condition = useCallback(
    (product) => {
      const categoryCondition = selectedCategory
        ? product.category
            .toLowerCase()
            .includes(selectedCategory.value.toLowerCase())
        : true;
      return categoryCondition;
    },
    [selectedCategory]
  );

  const filterProducts = useCallback(() => {
    const filtered = PRODUCTS.filter((product) => condition(product));
    setProducts(filtered);
  }, [PRODUCTS, condition]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts, selectedCategory]);

  return (
    <section className="pt-30 px-20">
      <div className="pt-24 mb-8 flex justify-between items-center">
        <div className="flex items-center ">
          <h2 className="text-xl mb-2 mr-4 font-bold  text-gray-400">
            Search Products here :
          </h2>
          <input
            type="text"
            className="block w-[16rem] py-2 px-3 border border-gray-400 rounded-md"
            placeholder="Enter Product Name"
            onChange={(e) => handleInputChange(e)}
          ></input>
        </div>
        <div className="flex items-center">
          <h2 className="text-xl mb-2 mr-4 font-bold  text-gray-400">
            Search by Category :
          </h2>
          <Select
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
            options={CATEGORIES}
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        {products.length ? (
          products.map((product) => <Product key={product.id} {...product} />)
        ) : (
          <div>
            <h1 className="font-normal text-2xl">No Results Found</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
