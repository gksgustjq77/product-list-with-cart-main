import type { CartItem } from "../../pages/product";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  list: CartItem[];
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, list, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-[35rem] gap-[15px] flex flex-col">
          <div>
            <img
              src="/images/icon-order-confirmed.svg"
              className="w-[40px]"
            ></img>
          </div>
          <div className="flex flex-col text-left gap-2">
            <h1 className="text-black font-bold text-3xl">Order Confirmed</h1>
            <span className="text-[hsl(7,20%,60%)] text-sm ">
              We hope you enjoy your food!
            </span>
          </div>
          <div className="max-h-[600px] overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            {list &&
              list.map((cart, index: number) => (
                <div
                  className="flex flex-col bg-[hsl(13,31%,94%)] pt-[20px] pr-[20px] pb-0 pl-[20px]"
                  key={cart.product.name}
                >
                  <div className="flex gap-[15px] border-b border-[hsl(13,31%,94%] pb-6 mb-4">
                    <img
                      src={cart.product.image.thumbnail}
                      className="w-[60px]"
                      alt={cart.product.name}
                    />
                    <div className="flex flex-col w-full text-left justify-center">
                      <span className="text-black font-semibold">
                        {cart.product.name || ""}
                      </span>
                      <div>
                        <span className="text-[hsl(14,86%,42%)] font-bold mr-3">
                          {cart.quantity}x
                        </span>
                        <span className="text-[hsl(12,20%,44%)]">
                          @ ${cart.product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="text-black flex items-center">
                      <p className="font-bold">
                        ${(cart.product.price * cart.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  {index === list.length - 1 && (
                    <div className="text-left flex justify-between pb-[20px] mt-[10px] items-center">
                      <span className=" text-[hsl(12,20%,44%)]">
                        Order Total
                      </span>
                      <span className="text-black font-bold text-2xl">
                        $
                        {list
                          .reduce(
                            (sum: number, item: CartItem) =>
                              sum + item.quantity * item.product.price,
                            0
                          )
                          .toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
          </div>
          <button
            className="mt-4 text-sm px-3 py-3 w-full rounded-[20px] border-none text-white bg-[hsl(14,86%,42%)] hover:bg-[hsl(14,86%,37%)] focus:outline-none transition-colors"
            onClick={onClose}
          >
            Start New Order
          </button>
        </div>
      </div>
      ,
    </>
  );
};

export default CartModal;
