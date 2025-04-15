import { useState, useEffect } from "react";
import "../style.css";
import { CARDS_PER_PAGE, DATA_URL } from "../utils/constants";
import Pagination from "./Pagination";
import ProductsCards from "./ProductsCards";
import { Link } from "react-router-dom";

const ProductsContainer = () => {
  const [productsData, setProductsData] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageNumber = (index) => {
    setCurrentPage(index);
  };

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    setProductsData(json?.products);
    const productSize = json?.products.length;
    setPagesNumber(Math.ceil(productSize / CARDS_PER_PAGE));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-container">
      <div className="header">
        <h1 className="product-heading">
          <Link to="/productspagination">Products Pagination</Link>
        </h1>
        <button className="home-btn">
          <Link to="/">Home</Link>
        </button>
      </div>

      <div className="pagination">
        <Pagination
          prevPage={prevPage}
          pagesNumber={pagesNumber}
          handlePageNumber={handlePageNumber}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>

      <div className="product-body">
        <ProductsCards productsData={productsData} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default ProductsContainer;
