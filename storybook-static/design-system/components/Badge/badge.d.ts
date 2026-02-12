import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    shape?: "rounded" | "pill" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
    showDot?: boolean;
    onRemove?: () => void;
}
declare function Badge({ className, variant, size, shape, showDot, onRemove, children, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
