import { EdgeInsets } from '@bma98/fractal-navigation';
interface MarginInsets {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}
export declare function getMarginInsets(insets: EdgeInsets, removeHorizontal?: boolean, removeVertical?: boolean): MarginInsets;
export {};
