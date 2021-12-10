export interface FractalTextProps {
    fontSize?: number;
    fontWeight?: number | string;
    color?: string;
    fontFamily?: string;
    fontStyle?: 'italic' | 'normal';
    selectable?: boolean;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textOverflow?: 'ellipsis';
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'inherit' | 'initial' | 'unset';
    wordWrap?: 'normal' | 'break-word' | 'initial' | 'inherit';
}
export declare function extractTextProps({ fontSize, fontWeight, fontFamily, color, fontStyle, selectable, textAlign, textOverflow, whiteSpace, wordWrap }: FractalTextProps): string;
