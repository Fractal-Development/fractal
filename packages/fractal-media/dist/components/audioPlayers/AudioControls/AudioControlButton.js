import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { NextIcon } from '../../../assets/NextIcon';
import { PreviousIcon } from '../../../assets/PreviousIcon';
import { SMALL_ICON_SIZE } from './sizes';
import { getControlButtonAccessibilityProps } from '../accessibility/getControlButtonAccessibilityProps';
export function AudioControlButton({ onPress, variant }) {
    const { colors } = useTheme();
    return (React.createElement(BaseButton, Object.assign({ alignItems: 'center', justifyContent: 'center', width: 36, height: 36, onPress: onPress }, getControlButtonAccessibilityProps(variant)), variant == 'previous' ? (React.createElement(PreviousIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE })) : (React.createElement(NextIcon, { fill: colors.text, width: SMALL_ICON_SIZE, height: SMALL_ICON_SIZE }))));
}
//# sourceMappingURL=AudioControlButton.js.map