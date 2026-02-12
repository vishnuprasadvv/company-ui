import * as React from "react";
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    brand?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare function Navbar({ brand, actions, className, children, ...props }: NavbarProps): import("react/jsx-runtime").JSX.Element;
