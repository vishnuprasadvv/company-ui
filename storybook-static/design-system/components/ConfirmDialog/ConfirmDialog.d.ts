import { ReactNode } from '../../../../node_modules/react';
interface ConfirmationDialogProps {
    open: boolean;
    title?: string;
    description?: ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => Promise<void> | void;
    onCancel?: () => void;
    isCancelButtonVisible?: boolean;
    isShowCloseButton?: boolean;
    icon?: ReactNode;
    titleAlignment?: "center" | "left" | "right";
}
export declare function ConfirmationDialog({ open, title, description, confirmText, cancelText, onConfirm, onCancel, isCancelButtonVisible, isShowCloseButton, icon, titleAlignment, }: ConfirmationDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
