import { DateRange } from 'react-day-picker';
type BaseProps = {
    placeholder: string;
    disablePastDates?: boolean;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    showTooltip?: boolean;
    className?: string;
    triggerClassName?: string;
};
export type DatePickerProps = (BaseProps & {
    mode?: "single";
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date | undefined) => void;
}) | (BaseProps & {
    mode: "multiple";
    value?: Date[];
    defaultValue?: Date[];
    onChange?: (date: Date[] | undefined) => void;
}) | (BaseProps & {
    mode: "range";
    value?: DateRange;
    defaultValue?: DateRange;
    onChange?: (date: DateRange | undefined) => void;
});
export declare function DatePicker(props: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
