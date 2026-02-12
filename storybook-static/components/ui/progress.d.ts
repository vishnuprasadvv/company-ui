import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
declare function Progress({ className, value, indicatorClassName, // New prop
...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
export { Progress };
