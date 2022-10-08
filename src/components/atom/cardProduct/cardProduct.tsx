import { useState } from "react";
import { useCookies } from "react-cookie";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProductTypes } from "../../../../interface.model";
import { useDeleteProductMutation } from "../../../services/productApi/productApi";
import { UpdateProductModals } from "../../organism";
import Button from "../button/button";

const CardProduct = ({
  _id,
  title,
  creator,
  desc,
  price,
  thumbnail,
}: ProductTypes) => {
  const [edit, setEdit] = useState(false);
  const [cookies] = useCookies(["token"]);
  const [deleteProduct] = useDeleteProductMutation();
  const navigate = useNavigate();
  const image = thumbnail as string;
  console.log(image);

  const handleEdit = () => {
    if (cookies.token) {
      setEdit(true);
    } else {
      alert("you must login first");
      navigate("/login");
    }
  };

  const handleDelete = () => {
    deleteProduct({ id: _id, token: cookies.token as string });
  };
  return (
    <div className="rounded p-4 bg-slate-100 flex flex-col relative">
      {edit && <UpdateProductModals close={(e) => setEdit(e)} id={_id} />}
      <div
        className="edit cursor-pointer absolute top-2 text-xl right-2 p-1 bg-white rounded shadow-sm hover:bg-slate-100"
        onClick={handleEdit}
      >
        <MdOutlineEdit />
      </div>
      <div className="img w-0 h-0 pb-2/3 pr-full rounded-t bg-slate-500">
        <img
          src={image}
          alt="thumbnail"
          className="object-cover object-center overflow-hidden"
        />
      </div>
      <div className="content w-full flex flex-col h-full justify-between bg-white rounded pb-4">
        <div className="title mb-4 flex justify-between bg-merah text-white rounded-b p-2 items-center">
          <h2 className="title text-xl font-semibold">{title}</h2>
          <p className="price text-base">Rp. {price}</p>
        </div>
        <div className="detail flex h-full gap-6 justify-between flex-col">
          <p className="desc px-2 text-sm text-slate-700">{desc}</p>
          <p className="author text-sm font-semibold text-biru-2 px-2">
            {creator}
          </p>
          {cookies.token && (
            <div className="button px-2 w-full">
              <Button type="button" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
