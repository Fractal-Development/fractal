import { useTheme } from '../../../../context';
import { ButtonVariant } from '../types';

export function useToggleButtonColors(variant: ButtonVariant, active = false, useGrayVariant = false): [string, string, string] {
    const { colors } = useTheme();
    const backgroundColorName = (() => {
        if (active) {
            return variant === 'content' ? `${variant}InteractiveColor600` : `${variant}InteractiveColor100`;
        }
        return 'background';
    })();

    const foregroundColorName = (() => {
        if (active) {
            return variant === 'content' ? 'text' : `${variant}InteractiveColor`;
        }
        return useGrayVariant ? `placeholder` : 'text';
    })();

    const pressedColorName = (() => {
        if (active) {
            return variant === 'content' ? `${variant}InteractiveColor800` : `${variant}InteractiveColor200`;
        }
        return `background`;
    })();

    const backgroundColor = colors[backgroundColorName];
    const foregroundColor = colors[foregroundColorName];
    const pressedColor = colors[pressedColorName];

    return [backgroundColor, foregroundColor, pressedColor];
}
