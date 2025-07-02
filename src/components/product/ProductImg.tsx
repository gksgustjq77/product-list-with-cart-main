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
  const CartBtnRendering = () => {
    if (cart && cart[id] > 0) {
      return <CartCount id={id} cart={cart} onClick={onClick} />;
    } else {
      return <AddCartBtn id={id} onClick={onClick} />;
    }
  };

  const isInCart = cart[id] > 0;

  return (
    <div className="relative">
      <img
        src={imgUrl.tablet}
        alt="product"
        className={`rounded-[20px] w-[300px] border-4 ${
          isInCart ? "border-[hsl(14,86%,42%)]" : "border-transparent"
        }`}
      />
      {CartBtnRendering()}
    </div>
  );
};

export default ProductImg;
