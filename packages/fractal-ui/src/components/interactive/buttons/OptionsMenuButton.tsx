import React, { ReactNode, useState } from 'react';
import { ThreeDotsHorizontalIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { CircularIconButton } from './CircularIconButton';
import { TouchableOpacity } from './TouchableOpacity';
import { Box } from '../../layout';
import { Popover } from '../../overlays/Popover';
import { Text } from '../../text';

interface OptionsMenuButtonProps {
    customIcon?: (color: string) => ReactNode;
    options: Array<string>;
    onOptionPress: (option: string) => void;
}

export function OptionsMenuButton({ options, onOptionPress, customIcon }: OptionsMenuButtonProps): JSX.Element {
    const { sizes, spacings } = useTheme();
    const [optionsVisible, setOptionsVisible] = useState(false);

    const hideOptions = () => setOptionsVisible(false);

    const toggleOptions = () => setOptionsVisible((currentValue) => !currentValue);

    const handleOptionPress = (option: string) => {
        onOptionPress(option);
        hideOptions();
    };

    const renderMenu = () => (
        <Box padding={0} overflow={'hidden'}>
            {options.map((option, index) => (
                <TouchableOpacity key={`${option}_${index}`} padding={spacings.s} onPress={() => handleOptionPress(option)}>
                    <Text variant={'normal'} flexShrink={1} style={{ textAlign: 'left' }}>
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </Box>
    );

    return (
        <Popover placement={'bottom'} active={optionsVisible} onRequestClose={hideOptions} popoverChildren={renderMenu}>
            {(ref) => (
                <CircularIconButton ref={ref} variant={'content'} reduceColor onPress={toggleOptions}>
                    {customIcon
                        ? customIcon
                        : (color) => (
                              <ThreeDotsHorizontalIcon height={sizes.textFieldIconSize} width={sizes.textFieldIconSize} fill={color} />
                          )}
                </CircularIconButton>
            )}
        </Popover>
    );
}
