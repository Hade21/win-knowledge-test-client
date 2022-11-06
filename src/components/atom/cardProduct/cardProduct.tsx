import { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [cookies] = useCookies(["token"]);
  const [deleteProduct] = useDeleteProductMutation();

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
    <div className="relative flex flex-col rounded bg-slate-100 p-4">
      {edit && <UpdateProductModals close={(e) => setEdit(e)} id={_id} />}
      <div
        className="edit absolute top-2 right-2 cursor-pointer rounded bg-white p-1 text-xl shadow-sm hover:bg-slate-100"
        onClick={handleEdit}
      >
        <MdOutlineEdit />
      </div>
      <div
        className="img h-2/3 w-full overflow-hidden rounded-t bg-slate-500"
        id="image"
      >
        <img
          src={thumbnail}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="content flex h-full w-full flex-col justify-between rounded bg-white pb-4">
        <div className="title mb-4 flex items-center justify-between rounded-b bg-merah p-2 text-white">
          <h2 className="title text-xl font-semibold">{title}</h2>
          <p className="price text-base">Rp. {price}</p>
        </div>
        <div className="detail flex h-full flex-col justify-between gap-6">
          <p className="desc px-2 text-sm text-slate-700">{desc}</p>
          <p className="author px-2 text-sm font-semibold text-biru-2">
            {creator.name}
          </p>
          {cookies.token && (
            <div className="button w-full px-2">
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
