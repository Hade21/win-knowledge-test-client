import { useGetProductsQuery } from "../../../services/productApi/productApi";
import { CardProduct } from "../../atom";

const ListProduct = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery(undefined);
  const products = data?.data;
  console.log(error);

  return (
    <div className="wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.map((item, i) => {
            return (
              <CardProduct
                key={i}
                _id={item._id}
                title={item.title}
                desc={item.desc}
                creator={item.creator}
                price={item.price}
                thumbnail={item.thumbnail}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
