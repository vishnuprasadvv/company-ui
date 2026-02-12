export interface SelectOption {
    label: string;
    value: string;
}
export interface SelectProps {
    label?: string;
    value?: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    error?: string;
    helperText?: string;
    className?: string;
}
export declare const Select: ({ label, value, onChange, options, placeholder, disabled, required, size, error, helperText, className, }: SelectProps) => import("react/jsx-runtime").JSX.Element;
