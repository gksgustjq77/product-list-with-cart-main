interface CartCountProps {
  id: number;
  onClick: (id: number, action: "add" | "plus" | "minus") => void;
  cart: Record<number, number>;
}

const CartCount: React.FC<CartCountProps> = ({ id, onClick, cart }) => {
  return (
    <>
      <>
        <div
          //   onClick={() => onClick(id)}
          className="flex items-center justify-around text-white w-[170px] justify-center bg-[hsl(14,86%,42%)] cursor-pointer gap-2 px-[20px] py-[10px] rounded-[20px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 hover:border-[hsl(14,86%,42%)]"
        >
          <img
            className="p-2"
            src="/images/icon-decrement-quantity.svg"
            onClick={() => onClick(id, "minus")}
          ></img>
          <span>{cart[id]}</span>
          <img
            className="p-2"
            src="/images/icon-increment-quantity.svg"
            onClick={() => onClick(id, "plus")}
          ></img>
        </div>
      </>
    </>
  );
};

export default CartCount;
