import React, { useState } from 'react';
import { ThreeDotsHorizontalIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { CircularIconButton } from './CircularIconButton';
import { TouchableOpacity } from './TouchableOpacity';
import { Box } from '../../layout';
import { Popover } from '../../overlays/Popover';
import { Text } from '../../text';
export function PopoverOptionsMenuButton({ options, onOptionPress, customIcon }) {
    const { sizes, spacings } = useTheme();
    const [optionsVisible, setOptionsVisible] = useState(false);
    const hideOptions = () => setOptionsVisible(false);
    const showOptions = () => setOptionsVisible(true);
    const handleOptionPress = (option) => {
        onOptionPress(option);
        hideOptions();
    };
    const renderMenu = () => (React.createElement(Box, { padding: 0, overflow: 'hidden' }, options.map((option, index) => (React.createElement(TouchableOpacity, { key: `${option}_${index}`, padding: spacings.s, onPress: () => handleOptionPress(option) },
        React.createElement(Text, { variant: 'normal', flexShrink: 1, style: { textAlign: 'left' } }, option))))));
    return (React.createElement(Popover, { placement: 'bottom', active: optionsVisible, onRequestClose: hideOptions, popoverChildren: renderMenu }, (ref) => (React.createElement(CircularIconButton, { ref: ref, variant: 'content', reduceColor: true, onPress: showOptions }, customIcon
        ? customIcon
        : (color) => (React.createElement(ThreeDotsHorizontalIcon, { height: sizes.textFieldIconSize, width: sizes.textFieldIconSize, fill: color }))))));
}
//# sourceMappingURL=PopoverOptionsMenuButton.js.map