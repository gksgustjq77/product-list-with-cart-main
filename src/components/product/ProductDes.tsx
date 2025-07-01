interface ProductDesProps {
  name: string;
  category: string;
  price: number;
}

const ProductDes: React.FC<ProductDesProps> = ({ name, category, price }) => {
  return (
    <>
      <div className="flex flex-col text-left">
        <span className="text-[hsl(7,20%,60%)]">{category}</span>
        <span className="text-black font-bold">{name}</span>
        <span className="text-[hsl(14,86%,42%)] font-semibold">
          ${price.toFixed(2)}
        </span>
      </div>
    </>
  );
};
export default ProductDes;
