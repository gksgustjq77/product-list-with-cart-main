interface ProductTitleProps {
  title: string;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ title }) => {
  return (
    <>
      <div>
        <h1 className="text-black text-[32px] font-bold">{title || "Title"}</h1>
      </div>
    </>
  );
};

export default ProductTitle;
