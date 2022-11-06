import { ListProduct } from "../../molecule";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useState } from "react";
import AddProductModals from "../addProductModals/addProductModals";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const [add, setAdd] = useState(false);
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const handleAdd = () => {
    if (cookies.token) {
      setAdd(true);
    } else {
      alert("you must login first");
      navigate("/login");
    }
  };

  return (
    <div className="wrapper mt-20 mb-40 px-4 md:px-[17%]">
      {add && <AddProductModals close={(e: boolean) => setAdd(e)} />}
      <div className="title flex justify-between items-center mb-8">
        <h1 className="text-3xl font-medium">Daftar Produk</h1>
        <div
          className="add flex gap-2 items-center cursor-pointer text-base"
          onClick={handleAdd}
        >
          <p>Add Product</p>
          <BiMessageSquareAdd />
        </div>
      </div>
      <ListProduct />
    </div>
  );
};

export default ProductSection;
