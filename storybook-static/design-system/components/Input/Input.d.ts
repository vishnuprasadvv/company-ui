import * as React from "react";
export type InputSize = "sm" | "md" | "lg";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
    label?: string;
    error?: React.ReactNode;
    helperText?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    loading?: boolean;
    size?: InputSize;
    containerClassName?: string;
    labelClassName?: string;
    messageClassName?: string;
    prefixPadding?: number;
    suffixPadding?: number;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export { Input };
