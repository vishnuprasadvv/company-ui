export interface MultiSelectProps {
    label?: string;
    value: string[];
    onChange: (value: string[]) => void;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: string;
    required?: boolean;
    error?: string;
    helperText?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare function MultiSelect({ label, value, onChange, options, placeholder, required, error, helperText, size, }: MultiSelectProps): import("react/jsx-runtime").JSX.Element;
