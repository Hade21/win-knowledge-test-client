import { FcAddImage } from "react-icons/fc";
import { Button, Input } from "../../atom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../app/store";
import {
  setCreator,
  setDesc,
  setPrice,
  setThumbnail,
  setTitle,
} from "../../../features/productSlice/productSlice";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useGetUserQuery } from "../../../services/userApi/userApi";
import {
  useAddProductMutation,
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../services/productApi/productApi";

interface CardInputProductProps {
  success: (e: boolean) => void;
  type: "add" | "edit";
  _id?: string;
}
const CardINputProduct = ({ success, type, _id }: CardInputProductProps) => {
  const dispatch = useDispatch();
  const [base64, setBase64] = useState("");
  const [cookies] = useCookies(["token", "user"]);
  const { data } = useGetUserQuery({ id: cookies.user, token: cookies.token });
  const [addProduct, { isSuccess: addSuccess }] = useAddProductMutation();
  const { data: dataByID } = useGetProductByIdQuery({
    id: _id as string,
    token: cookies.token,
  });
  const [updateProduct, { isSuccess: updateSuccess }] =
    useUpdateProductMutation();
  const title = useSelector((state: RootState) => state.product.title);
  const price = useSelector((state: RootState) => state.product.price);
  const desc = useSelector((state: RootState) => state.product.desc);
  const thumbnail = useSelector((state: RootState) => state.product.thumbnail);
  const creator = useSelector((state: RootState) => state.product.creator);

  const convertImageToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    if (id === "title") {
      dispatch(setTitle(value));
    } else if (id === "desc") {
      dispatch(setDesc(value));
    } else if (id === "creator") {
      dispatch(setCreator(value));
    }
  };
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(setPrice(Number(value)));
  };
  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let uploaded = e.currentTarget.files;
    const base64 = await convertImageToBase64(uploaded?.item(0) as Blob);
    setBase64(base64 as string);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      title,
      price,
      desc,
      thumbnail,
      creator,
    };
    console.log(body);
    if (type === "add") {
      await addProduct({ body, token: cookies.token });
    } else if (type === "edit" && _id) {
      await updateProduct({ body, token: cookies.token, id: _id });
    }
  };
  useEffect(() => {
    if (data) {
      setCreator(data.data.fullname);
    }
  }, []);
  useEffect(() => {
    dispatch(setThumbnail(base64));
  }, [base64, dispatch, thumbnail]);
  useEffect(() => {
    if (addSuccess) {
      success(false);
    } else if (updateSuccess) {
      success(false);
    }
  }, [addSuccess, updateSuccess]);
  useEffect(() => {
    if (type === "edit") {
      dispatch(setTitle(title));
      dispatch(setPrice(price));
      dispatch(setDesc(desc));
      dispatch(setThumbnail(thumbnail));
      dispatch(setCreator(creator));
    }
  }, []);
  useEffect(() => {
    if (type === "edit") {
      dispatch(setTitle(dataByID?.data.title));
      dispatch(setPrice(dataByID?.data.price));
      dispatch(setDesc(dataByID?.data.desc));
      dispatch(setThumbnail(dataByID?.data.thumbnail));
      dispatch(setCreator(dataByID?.data.creator));
    }
  }, []);

  return (
    <div className="bg-white rounded p-4 w-2/3 flex justify-center items-center gap-4">
      <div className="image flex-1 flex flex-col gap-4 items-center">
        <div className="img w-full h-2/3 bg-slate-500 rounded overflow-hidden">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="add">
          <label htmlFor="image">
            <input
              type="file"
              name="image"
              id="image"
              className="sr-only"
              onChange={handleImage}
            />
            <div className="wrapper text-4xl cursor-pointer">
              <FcAddImage />
            </div>
          </label>
        </div>
      </div>
      <div className="detail flex-1">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="title">
            <Input
              type="text"
              placeholder="Enter Product Title"
              label="Title"
              value={title}
              onChange={handleChange}
              id="title"
            />
          </div>
          <div className="desc">
            <Input
              type="text"
              placeholder="Enter Product Desc"
              label="Description"
              value={desc}
              onChange={handleChange}
              id="desc"
            />
          </div>
          <div className="price">
            <Input
              type="number"
              placeholder="Enter Product Price"
              label="Price"
              value={price}
              onChange={handlePrice}
              id="desc"
            />
          </div>
          <div className="button mt-8">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardINputProduct;
