import { Toaster as Sonner, toast as sonnerToast } from 'sonner';
import * as React from "react";
export type ToasterProps = React.ComponentProps<typeof Sonner>;
declare const Toaster: ({ ...props }: ToasterProps) => import("react/jsx-runtime").JSX.Element;
/**
 * Custom wrapper to ensure consistent title/description structure
 * and to prevent "empty" toasts.
 */
export interface ToastApi {
    default: (title: string, description?: string) => string | number;
    success: (title: string, description?: string) => string | number;
    error: (title: string, description?: string) => string | number;
    warning: (title: string, description?: string) => string | number;
    info: (title: string, description?: string) => string | number;
    loading: (title: string) => string | number;
    action: (title: string, description: string, label: string, onClick: () => void) => string | number;
    dismiss: (id?: string | number) => void;
    promise: (promise: Promise<unknown>, options: Parameters<typeof sonnerToast.promise>[1]) => unknown;
}
export declare const toast: ToastApi;
export { Toaster };
