export type ProgressVariant = "primary" | "success" | "warning" | "error" | "neutral";
export type ProgressSize = "xs" | "sm" | "md" | "lg";
export interface ProgressBarProps {
    value?: number;
    type?: "simple" | "with-label" | "percentage-only";
    variant?: ProgressVariant;
    size?: ProgressSize;
    loading?: boolean;
    label?: string;
    ariaLabel?: string;
    className?: string;
}
export declare function ProgressBar({ value, type, variant, size, loading, label, ariaLabel, className, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
