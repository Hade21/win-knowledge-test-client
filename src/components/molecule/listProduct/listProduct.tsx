import { useGetProductsQuery } from "../../../services/productApi/productApi";
import { CardProduct } from "../../atom";

const ListProduct = () => {
  const { data, isLoading, isError } = useGetProductsQuery(undefined);
  const products = data?.data;

  return (
    <div className="wrapper">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products && products.length > 0 ? (
            products?.map((item, i) => {
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
            })
          ) : (
            <h1 className="text-xl">Tidak ada produk</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default ListProduct;
