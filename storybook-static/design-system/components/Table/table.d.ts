import * as React from 'react';
export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'bordered' | 'minimal';
interface TableProps extends React.ComponentProps<'table'> {
    wrapperClassName?: string;
    containerClassName?: string;
    size?: TableSize;
    variant?: TableVariant;
    stickyHeader?: boolean;
    striped?: boolean;
    hoverable?: boolean;
    bordered?: boolean;
    caption?: string;
    emptyMessage?: string;
    loading?: boolean;
    isEmpty?: boolean;
}
interface TableCellProps extends React.ComponentProps<'td'> {
    align?: 'left' | 'center' | 'right';
    truncate?: boolean;
}
interface TableHeadProps extends React.ComponentProps<'th'> {
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    sorted?: 'asc' | 'desc' | false;
    onSort?: () => void;
}
declare function Table({ className, wrapperClassName, stickyHeader, striped, hoverable, bordered, size, variant, caption, emptyMessage, isEmpty, loading, children, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<'thead'>): import("react/jsx-runtime").JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<'tbody'>): import("react/jsx-runtime").JSX.Element;
declare function TableRow({ className, clickable, ...props }: React.ComponentProps<'tr'> & {
    clickable?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare function TableHead({ className, align, sortable, sorted, onSort, children, ...props }: TableHeadProps): import("react/jsx-runtime").JSX.Element;
declare function TableCell({ className, align, truncate, ...props }: TableCellProps): import("react/jsx-runtime").JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>): import("react/jsx-runtime").JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<'caption'>): import("react/jsx-runtime").JSX.Element;
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter, TableCaption, };
