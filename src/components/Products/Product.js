const Product = (props) => {
  const { cover, title, name, price, mrp, discount } = props;
  return (
    <div className="bg-slate-100 delay-150 hover:scale-y-105 transition duration-300 ease-in-out w-[18rem] rounded-md shadow-md my-4  px-4 py-4">
      <img className="w-full py-2 h-64" src={cover} alt={title} />
      <div>
        <p className="font-normal text-gray-400 text-xl">{name}</p>
        <div className="flex items-center">
          <span className="mr-4 font-semibold text-gray-700 text-xl">
            Rs {price}
          </span>
          <del className="mr-2 text-xl text-gray-400 ">Rs{mrp}</del>
          <p className="text-green-600 font-semibold">{discount} off</p>
        </div>
        <button className="btn-blue mt-4">Add To Cart </button>
      </div>
    </div>
  );
};

export default Product;
