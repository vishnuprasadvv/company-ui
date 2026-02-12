import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
    content: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    className?: string;
    delayDuration?: number;
}
declare const Tooltip: ({ children, content, side, sideOffset, className, delayDuration, ...props }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export { Tooltip };
