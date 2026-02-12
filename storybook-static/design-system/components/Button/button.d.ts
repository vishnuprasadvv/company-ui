import { ButtonProps as ShadButtonProps } from '../../../components/ui/button';
import * as React from "react";
export interface ButtonProps extends ShadButtonProps {
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
