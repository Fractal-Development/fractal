import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { ChevronDownIcon } from '../../assets/ChevronDownIcon';
import { TextFieldButton } from './TextFieldButton';
const PickerButton = forwardRef((props, ref) => {
    const { colors } = useTheme();
    return React.createElement(TextFieldButton, Object.assign({ ref: ref, rightImage: React.createElement(ChevronDownIcon, { width: 21, fill: colors.placeholder }) }, props));
});
PickerButton.displayName = 'PickerButton';
export { PickerButton };
//# sourceMappingURL=PickerButton.js.map