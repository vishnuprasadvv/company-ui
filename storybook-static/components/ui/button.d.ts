import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "lg" | "default" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
};
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Button, buttonVariants };
