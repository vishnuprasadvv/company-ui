import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
export type RadioSize = "sm" | "md" | "lg";
export type LabelSize = "sm" | "md" | "lg";
export interface RadioGroupProps extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
    label?: React.ReactNode;
    helperText?: string;
    error?: string;
    required?: boolean;
    /** Size of radio control */
    size?: RadioSize;
    /** Top field label */
    groupLabelSize?: LabelSize;
    /** Item text */
    itemLabelSize?: LabelSize;
}
export interface RadioItemProps extends React.ComponentProps<typeof RadioGroupPrimitive.Item> {
    label?: React.ReactNode;
    size?: RadioSize;
    itemLabelSize?: LabelSize;
}
export declare function RadioGroup({ className, label, helperText, error, required, size, groupLabelSize, itemLabelSize, children, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare function RadioGroupItem({ className, size, itemLabelSize, label, id, ...props }: RadioItemProps): import("react/jsx-runtime").JSX.Element;
