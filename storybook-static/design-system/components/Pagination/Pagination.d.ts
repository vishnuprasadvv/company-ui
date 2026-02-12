import { default as React } from '../../../../node_modules/react';
export interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
