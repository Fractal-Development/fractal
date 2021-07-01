import { useTheme } from '../../../context';
export function useCircularButtonColors(variant, reduceColor = false) {
    const { colors } = useTheme();
    const backgroundColorName = (() => {
        if (variant === 'content') {
            return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor`;
        }
        else {
            return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor400`;
        }
    })();
    const foregroundColorName = (() => {
        if (variant === 'content') {
            return 'text';
        }
        else {
            return reduceColor ? `${variant}InteractiveColor` : `${variant}InteractiveColor700`;
        }
    })();
    const pressedColorName = (() => {
        if (variant === 'content') {
            return `${variant}InteractiveColor600`;
        }
        else {
            return reduceColor ? `${variant}InteractiveColor200` : `${variant}InteractiveColor`;
        }
    })();
    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];
    return [backgroundColor, foregroundColor, pressedColor];
}
//# sourceMappingURL=useCircularIconButtonColors.js.map