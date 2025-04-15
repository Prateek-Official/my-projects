const Pagination = ({prevPage, pagesNumber, handlePageNumber, nextPage, currentPage}) => {
  return (
    <>
      <button
        type="button"
        className="page-number"
        onClick={prevPage}
        disabled={currentPage === 0}
      >
        ◀️
      </button>

      {new Array(pagesNumber).fill("1").map((_, index) => (
        <span
          key={index + 1}
          className={"page-number " + (currentPage === index ? "active" : "")}
          onClick={() => handlePageNumber(index)}
        >
          {index + 1}
        </span>
      ))}
      <button
        type="button"
        className="page-number"
        onClick={nextPage}
        disabled={currentPage === pagesNumber - 1}
      >
        ▶️
      </button>
    </>
  );
};

export default Pagination;
