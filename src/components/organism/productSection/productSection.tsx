import { ListProduct } from "../../molecule";
import { BiMessageSquareAdd } from "react-icons/bi";

const ProductSection = () => {
  return (
    <div className="wrapper mt-20 mb-40 px-4 md:px-[17%]">
      <div className="title flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium block">Daftar Product</h1>
        <div className="add flex gap-2 items-center cursor-pointer text-base">
          <p>Add Product</p>
          <BiMessageSquareAdd />
        </div>
      </div>
      <ListProduct />
    </div>
  );
};

export default ProductSection;
