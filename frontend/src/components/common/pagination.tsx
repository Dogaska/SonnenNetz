import { useState } from "react";

export function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3]; // This should be dynamically calculated based on data in a real app

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    // You would also fetch new data here if needed
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`mx-1 px-4 py-2 rounded ${
            currentPage === page
              ? "bg-indigo-500 text-white"
              : "bg-white text-indigo-500 border border-indigo-500"
          } hover:bg-indigo-600`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === pages.length}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Next
      </button>
    </div>
  );
}
