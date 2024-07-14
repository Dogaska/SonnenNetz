import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // Create an array of page numbers for rendering
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Prev
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
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
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 px-4 py-2 rounded text-white bg-indigo-500 border border-indigo-500 hover:bg-indigo-600"
      >
        Next
      </button>
    </div>
  );
};
