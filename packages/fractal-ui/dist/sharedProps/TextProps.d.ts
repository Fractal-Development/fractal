export interface FractalTextProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textOverflow?: 'ellipsis';
}
export declare function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable, textAlign, textOverflow }: FractalTextProps): string;
