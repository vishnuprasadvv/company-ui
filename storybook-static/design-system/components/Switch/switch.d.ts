import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
    label?: string;
    helperText?: string;
    error?: string;
    required?: boolean;
    size?: "sm" | "md" | "lg";
}
export declare function Switch({ label, helperText, error, required, size, disabled, className, ...props }: SwitchProps): import("react/jsx-runtime").JSX.Element;
