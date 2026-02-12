import * as React from "react";
export type Option = {
    label: string;
    value: string;
};
export interface DropdownSelectorProps {
    value?: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    contentClassName?: string;
}
export declare const DropdownSelector: React.FC<DropdownSelectorProps>;
