import { useState } from "react";
import data from "../../data.json";
import ProductImg from "../components/product/ProductImg";
import ProductTitle from "../components/product/ProductTitle";

const Product: React.FC = () => {
  const [productList, setProductList] = useState(data);

  return (
    <>
      <div className="text-left mb-5">
        <ProductTitle title="Desserts"></ProductTitle>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList.map((p) => (
          <ProductImg imgUrl={p.image} />
        ))}
      </div>
    </>
  );
};
export default Product;
