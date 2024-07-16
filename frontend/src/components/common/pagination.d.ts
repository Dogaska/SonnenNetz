import React from "react";
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
