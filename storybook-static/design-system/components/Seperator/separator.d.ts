import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
export interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
    variant?: "solid" | "dashed" | "dotted";
    label?: React.ReactNode;
}
declare function Separator({ className, orientation, decorative, variant, label, ...props }: SeparatorProps): import("react/jsx-runtime").JSX.Element;
export { Separator };
