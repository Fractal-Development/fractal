import { useTheme } from '../../../../context';
import { ButtonVariant } from '../types';

export function useCircularButtonColors(variant: ButtonVariant, reduceColor = false): [string, string, string] {
    const { colors } = useTheme();
    const backgroundColorName = (() => {
        if (variant === 'content') {
            return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor`;
        }
        return reduceColor ? `${variant}InteractiveColor100` : `${variant}InteractiveColor400`;
    })();

    const foregroundColorName = (() => {
        if (variant === 'content') {
            return 'text';
        }
        return reduceColor ? `${variant}InteractiveColor` : `${variant}InteractiveColor700`;
    })();

    const pressedColorName = (() => {
        if (variant === 'content') {
            return `${variant}InteractiveColor600`;
        }
        return reduceColor ? `${variant}InteractiveColor200` : `${variant}InteractiveColor`;
    })();

    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];

    return [backgroundColor, foregroundColor, pressedColor];
}
