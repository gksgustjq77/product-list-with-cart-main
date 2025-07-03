import type { CartItem } from "../../pages/product";
import ConfirmCart from "./ConfirmCart";

interface UserCartProps {
  list: CartItem[];
  onClick: () => void;
}

const UserCart: React.FC<UserCartProps> = ({ list, onClick }) => {
  console.log("list", list);

  const userCartRendering = () => {
    if (list.length < 1) {
      return (
        <>
          <span className="font-bold text-[hsl(14,86%,42%)] text-left w-full text-lg">
            Your Cart (
            {list.reduce(
              (sum: number, item: CartItem) => sum + item.quantity,
              0
            )}
            )
          </span>
          <img
            className="w-[150px]"
            src="/images/illustration-empty-cart.svg"
            alt="illustration-empty-cart"
          ></img>
          <span className="text-[hsl(7,20%,60%)] font-semibold">
            Your added items will appear here
          </span>
        </>
      );
    } else {
      return (
        <>
          <span className="font-bold text-[hsl(14,86%,42%)] text-left w-full text-lg">
            Your Cart (
            {list.reduce(
              (sum: number, item: CartItem) => sum + item.quantity,
              0
            )}
            )
          </span>
          <ConfirmCart list={list} onClick={onClick} />;
        </>
      );
    }
  };

  return (
    <>
      <div className="flex flex-col p-7 bg-white h-auto gap-4 items-center">
        {userCartRendering()}
      </div>
    </>
  );
};

export default UserCart;
