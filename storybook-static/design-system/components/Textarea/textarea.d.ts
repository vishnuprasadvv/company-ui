import * as React from "react";
export type TextareaSize = "sm" | "md" | "lg";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: React.ReactNode;
    helperText?: React.ReactNode;
    size?: TextareaSize;
    containerClassName?: string;
    labelClassName?: string;
    messageClassName?: string;
    required?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
