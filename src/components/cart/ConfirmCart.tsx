import type { CartItem } from "../../pages/product";
import PrimaryButton from "../button/PrimaryButton";

interface UserCartProps {
  list: CartItem[];
  onClick: () => void;
}

const ConfirmCart: React.FC<UserCartProps> = ({ list, onClick }) => {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full text-left">
        {list.map((cart) => (
          <>
            <div
              className="flex flex-col border-b border-[hsl(13,31%,94%)] pb-4 gap-[0.5em]"
              key={cart.product.name}
            >
              <span className="text-black font-semibold">
                {cart.product.name || ""}
              </span>
              <div className="flex items-center">
                <span className="text-[hsl(14,86%,42%)] font-bold mr-3">
                  {cart.quantity}x
                </span>
                <span className="text-[hsl(12,20%,44%)] flex">
                  <p>@ ${cart.product.price.toFixed(2)}</p>&nbsp;
                  <p className="font-bold">
                    ${(cart.product.price * cart.quantity).toFixed(2)}
                  </p>
                </span>
              </div>
            </div>
          </>
        ))}
        <div className="flex items-center justify-between">
          <span className="text-[hsl(12,20%,44%)] font-semibold">
            Order Total
          </span>
          <span className="text-3xl font-bold text-black">
            $
            {list
              .reduce((sum, a) => sum + a.quantity * a.product.price, 0)
              .toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-center bg-[hsl(13,31%,94%)] p-4 px-6 rounded-[7px] text-sm">
          <img src="/images/icon-carbon-neutral.svg"></img>&nbsp;
          <span className="text-black flex">
            This is a &nbsp;<p className="font-bold">carbon-neutral</p>&nbsp;
            delivery
          </span>
        </div>

        <PrimaryButton title="Confirm Order" onClick={onClick} />
      </div>
    </>
  );
};
export default ConfirmCart;
