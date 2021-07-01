export interface TextProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
}
export declare function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable }: TextProps): string;
