const ProductCard = ({img, text}) => {
  return (
    <div className="col-md-4" data-aos="fade-up">
      <div className="product-card text-center">
          <img src={img} alt="" />
          <p className="name">{text}</p>
      </div>
    </div>
  );
};

export default ProductCard;
