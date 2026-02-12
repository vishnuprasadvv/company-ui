import { default as React } from '../../../node_modules/react';
import { ThemeConfig } from '../../types/theme';
interface ThemeContextType {
    theme: ThemeConfig;
    setTheme: (theme: ThemeConfig | Partial<ThemeConfig>) => void;
    loadThemeFromAPI: (apiUrl: string) => Promise<void>;
    resetTheme: () => void;
    toggleMode: () => void;
    isLoading: boolean;
    error: string | null;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: ThemeConfig;
    apiUrl?: string;
    onThemeChange?: (theme: ThemeConfig) => void;
    enableLocalStorage?: boolean;
    storageKey?: string;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
