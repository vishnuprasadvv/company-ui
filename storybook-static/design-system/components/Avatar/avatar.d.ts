import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
declare const avatarVariants: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root>, VariantProps<typeof avatarVariants> {
    status?: "online" | "offline" | "away" | "busy";
}
declare function Avatar({ className, size, shape, status, ...props }: AvatarProps): import("react/jsx-runtime").JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): import("react/jsx-runtime").JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): import("react/jsx-runtime").JSX.Element;
export { Avatar, AvatarImage, AvatarFallback };
