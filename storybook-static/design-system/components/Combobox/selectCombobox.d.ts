import * as React from 'react';
export interface ComboboxOption {
    label: string;
    value: string;
}
type BaseProps = {
    label?: string;
    options: ComboboxOption[];
    placeholder?: string;
    disabled?: boolean;
    loading?: boolean;
    error?: React.ReactNode;
    helperText?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    required?: boolean;
    side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
    className?: string;
    containerClassName?: string;
    labelClassName?: string;
    messageClassName?: string;
    inputClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
    chipClassName?: string;
};
type SingleProps = BaseProps & {
    multiple?: false | undefined;
    value?: ComboboxOption | null;
    onChange?: (value: ComboboxOption | null) => void;
    showClear?: boolean;
};
type MultiProps = BaseProps & {
    multiple: true;
    value?: ComboboxOption[] | null;
    onChange?: (value: ComboboxOption[]) => void;
    showClear?: false;
};
export type ComboboxProps = SingleProps | MultiProps;
export declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLDivElement>>;
export {};
