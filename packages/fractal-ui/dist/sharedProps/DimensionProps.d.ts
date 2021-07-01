export interface DimensionProps {
    width?: string | number;
    maxWidth?: string | number;
    minWidth?: string | number;
    height?: string | number;
    maxHeight?: string | number;
    minHeight?: string | number;
    padding?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingRight?: number;
    paddingLeft?: number;
    margin?: number;
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
}
export declare function extractDimensionProps({ height, maxHeight, minHeight, maxWidth, minWidth, width, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, margin, marginBottom, marginLeft, marginRight, marginTop }: DimensionProps): string;
