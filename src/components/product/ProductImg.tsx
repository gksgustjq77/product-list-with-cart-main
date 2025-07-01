import AddCartBtn from "../cart/AddCartBtn";
import CartCount from "../cart/CartCount";

interface ProductImgProps {
  id: number;
  onClick: (id: number, action: "add" | "plus" | "minus") => void;
  imgUrl: Record<string, string>;
  cart: Record<number, number>;
}

const ProductImg: React.FC<ProductImgProps> = ({
  onClick,
  imgUrl,
  id,
  cart,
}) => {
  console.log("cart ", cart[id]);
  const CartBtnRendering = () => {
    if (cart && cart[id] > 0) {
      return <CartCount id={id} cart={cart} onClick={onClick}></CartCount>;
    } else return <AddCartBtn id={id} onClick={onClick}></AddCartBtn>;
  };
  return (
    <>
      <div className="relative">
        <img
          src={imgUrl.tablet}
          alt="product"
          className="rounded-[20px] w-[300px]"
        />
        {CartBtnRendering()}
        {/* <AddCartBtn id={id} onClick={onClick}></AddCartBtn> */}
      </div>
    </>
  );
};

export default ProductImg;
