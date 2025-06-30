interface ProductImgProps {
  imgUrl: any;
}

const ProductImg: React.FC<ProductImgProps> = ({ imgUrl }) => {
  return (
    <>
      <div>
        <img src={imgUrl.tablet} alt="product" />
      </div>
    </>
  );
};

export default ProductImg;
