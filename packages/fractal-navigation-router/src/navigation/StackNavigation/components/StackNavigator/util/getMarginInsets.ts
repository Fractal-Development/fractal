import { EdgeInsets } from '@bma98/fractal-navigation';

interface MarginInsets {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}

export function getMarginInsets(insets: EdgeInsets, removeHorizontal?: boolean, removeVertical?: boolean): MarginInsets {
    const marginTop = removeVertical ? 0 : insets.top;
    const marginRight = removeHorizontal ? 0 : insets.right;
    const marginBottom = removeVertical ? 0 : insets.bottom;
    const marginLeft = removeHorizontal ? 0 : insets.left;

    return {
        marginTop,
        marginRight,
        marginBottom,
        marginLeft
    };
}
