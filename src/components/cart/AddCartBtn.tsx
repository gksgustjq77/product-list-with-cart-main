interface ProductImgProps {
  id: number;
  onClick: (id: number, action: "add" | "plus" | "minus") => void;
}

const AddCartBtn: React.FC<ProductImgProps> = ({ onClick, id }) => {
  return (
    <>
      <div
        onClick={() => onClick(id, "add")}
        className="flex items-center w-[170px] justify-center text-black cursor-pointer gap-2 px-[20px] py-[10px] bg-white border border-[hsl(12,20%,44%)] rounded-[20px] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 hover:border-[hsl(14,86%,42%)] hover:text-[hsl(14,86%,42%)]"
      >
        <img src="/images/icon-add-to-cart.svg"></img>
        <span className="font-semibold">Add to Cart</span>
      </div>
    </>
  );
};

export default AddCartBtn;
