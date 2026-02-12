export interface CheckboxProps {
    id?: string;
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    helperText?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare function Checkbox({ id, label, checked, defaultChecked, onCheckedChange, disabled, required, error, helperText, size, className, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
