import { useState } from "react";
import data from "../../data.json";
import ProductImg from "../components/product/ProductImg";
import ProductTitle from "../components/product/ProductTitle";
import type { ProductType } from "../type/product";
import ProductDes from "../components/product/ProductDes";
import UserCart from "../components/cart/UserCart";
import CartModal from "../components/cart/CartModal";

type UserCart = {
  [id: number]: number;
};

export type CartItem = {
  product: ProductType;
  quantity: number;
};

const Product: React.FC = () => {
  const [productList, _] = useState<ProductType[]>(data);
  const [cart, setCart] = useState<UserCart>({});
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const updateCart = (id: number, action: "add" | "plus" | "minus") => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;

      let newQty = currentQty;

      if (action === "add" || action === "plus") {
        newQty = currentQty + 1;
      } else if (action === "minus") {
        newQty = currentQty - 1;
      }

      return {
        ...prev,
        [id]: newQty < 0 ? 0 : newQty,
      };
    });
  };

  const cartList: CartItem[] = productList
    .filter((product) => cart[product.id])
    .map((product) => ({
      product,
      quantity: cart[product.id],
    }));

  return (
    <div className="flex items-start gap-6 grid grid-cols-1 lg:grid-cols-[1fr_360px]">
      <div className="text-left inline-grid gap-6">
        <div>
          <ProductTitle title="Desserts"></ProductTitle>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productList.map((p) => (
            <div>
              <ProductImg
                imgUrl={p.image}
                id={p.id}
                cart={cart}
                onClick={updateCart}
              />
              <div className="mt-10"></div>
              <ProductDes
                name={p.name}
                category={p.category}
                price={p.price}
              ></ProductDes>
            </div>
          ))}
        </div>
      </div>
      <UserCart
        list={cartList}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      ></UserCart>
      <CartModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
        list={cartList}
      ></CartModal>
    </div>
  );
};
export default Product;
