import { useTheme } from '../../../context';
export function useButtonColors(variant, reduceColor = false) {
    const { colors } = useTheme();
    const backgroundColorName = reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor`;
    const foregroundColorName = (() => {
        if (variant === 'content') {
            return 'text';
        }
        else {
            return reduceColor ? `${variant}InteractiveColor` : 'white';
        }
    })();
    const pressedColorName = reduceColor && variant !== 'content' ? `${variant}InteractiveColor200` : `${variant}InteractiveColor600`;
    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];
    return [backgroundColor, foregroundColor, pressedColor];
}
//# sourceMappingURL=useButtonColors.js.map