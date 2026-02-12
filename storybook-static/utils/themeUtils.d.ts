import { ThemeColors, ThemeConfig } from '../types/theme';
/**
 * Applies theme configuration to the document root
 */
export declare const applyTheme: (theme: ThemeConfig) => void;
/**
 * Convert hex color to HSL format for Tailwind
 */
export declare const hexToHSL: (hex: string) => string;
/**
 * Convert RGB to HSL
 */
export declare const rgbToHSL: (r: number, g: number, b: number) => string;
/**
 * Merge theme configurations
 */
export declare const mergeThemes: (baseTheme: ThemeConfig, overrides: Partial<ThemeConfig>) => ThemeConfig;
/**
 * Validate theme configuration
 */
export declare const validateTheme: (theme: Partial<ThemeConfig>) => boolean;
/**
 * Generate complementary colors for a theme
 */
export declare const generateThemeVariations: (baseColor: string) => Partial<ThemeColors>;
