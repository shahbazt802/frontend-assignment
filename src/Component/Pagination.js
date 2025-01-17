import React from "react";

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Determine which pages to show
  let pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    if (currentPage <= 5) {
      pageNumbers = [1, 2, 3, 4, 5, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      pageNumbers = [1, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <div
            className="arrow-card"
            onClick={handlePrev}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}>
            &laquo; Previous
          </div>
        </li>

        {pageNumbers.map((number, index) => (
          <li key={index} className={currentPage === number ? "active" : ""}>
            {number === "..." ? (
              <div className="ellipsis-card">{number}</div>
            ) : (
              <div
                className="non-arrow-card"
                onClick={() => paginate(number)}
                style={{
                  cursor: currentPage === number ? "not-allowed" : "pointer",
                }}>
                {number}
              </div>
            )}
          </li>
        ))}

        <li>
          <div
            className="arrow-card"
            onClick={handleNext}
            style={{ cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}>
            Next &raquo;
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
