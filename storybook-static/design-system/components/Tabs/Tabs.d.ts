import { default as React } from '../../../../node_modules/react';
export interface TabItem {
    value: string;
    label: string;
    content: React.ReactNode;
}
export interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onTabChange: (val: string) => void;
    className?: string;
    fullWidth?: boolean;
}
declare const Tabs: React.FC<TabsProps>;
export { Tabs };
