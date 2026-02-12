import * as React from "react";
export declare function Sidebar({ className, children, ...props }: React.HTMLAttributes<HTMLElement>): import("react/jsx-runtime").JSX.Element;
export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    active?: boolean;
}
export declare function SidebarItem({ icon, active, children, className, ...props }: SidebarItemProps): import("react/jsx-runtime").JSX.Element;
