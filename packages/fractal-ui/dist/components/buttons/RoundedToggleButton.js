import React from 'react';
import { useTheme } from '../../context';
import { ToggleButton } from './ToggleButton';
import { getRoundedToggleButtonAccessibilityProps } from './accessibility/getRoundedToggleButtonAccessibilityProps';
export function RoundedToggleButton(props) {
    const { sizes } = useTheme();
    return (React.createElement(ToggleButton, Object.assign({ height: sizes.interactiveItemHeight, width: sizes.interactiveItemHeight, borderRadius: sizes.interactiveItemHeight / 2 }, getRoundedToggleButtonAccessibilityProps(), props)));
}
//# sourceMappingURL=RoundedToggleButton.js.map