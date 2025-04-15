const ProductsCards = ({productsData, currentPage}) => {
  return (
    <>
      {productsData
        .slice(currentPage * 10, currentPage * 10 + 10)
        .map((product) => (
          <div key={product?.id} className="product-card">
            <img src={product?.thumbnail} alt="product image" />
            <p>{product?.title}</p>
            <p>Price : ${product?.price}</p>
          </div>
        ))}
    </>
  );
};

export default ProductsCards;
