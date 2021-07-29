import React, { ReactNode, useState } from 'react';
import { ThreeDotsHorizontalIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { CircularIconButton } from './CircularIconButton';
import { TouchableOpacity } from './TouchableOpacity';
import { Box, LayerProps } from '../../layout';
import { Popover } from '../../overlays/Popover';
import { Text } from '../../text';

interface OptionsMenuButtonProps {
    customIcon?: (color: string) => ReactNode;
    options: Array<string>;
    onOptionPress?: (option: string) => void;
    usePortal?: boolean;
    menuContainerProps?: Omit<LayerProps, 'children'>;
    children?: (anchorRef: any, showOptions: () => void) => ReactNode | Array<ReactNode>;
}

export function PopoverOptionsMenuButton({
    options,
    onOptionPress,
    customIcon,
    menuContainerProps,
    children,
    usePortal
}: OptionsMenuButtonProps): JSX.Element {
    const { sizes, spacings } = useTheme();
    const [optionsVisible, setOptionsVisible] = useState(false);

    const hideOptions = () => setOptionsVisible(false);

    const showOptions = () => setOptionsVisible(true);

    const handleOptionPress = (option: string) => {
        onOptionPress?.(option);
        hideOptions();
    };

    const renderMenu = () => (
        <Box padding={0} {...menuContainerProps}>
            {options.map((option, index) => (
                <TouchableOpacity key={`${option}_${index}`} padding={spacings.s} onPress={() => handleOptionPress(option)}>
                    <Text variant={'normal'} style={{ textAlign: 'left' }}>
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </Box>
    );

    return (
        <Popover
            placement={'bottom'}
            active={optionsVisible}
            onRequestClose={hideOptions}
            popoverChildren={renderMenu}
            usePortal={usePortal}
        >
            {children
                ? (ref) => children(ref, showOptions)
                : (ref) => (
                      <CircularIconButton ref={ref} variant={'content'} reduceColor onPress={showOptions}>
                          {customIcon
                              ? customIcon
                              : (color) => (
                                    <ThreeDotsHorizontalIcon
                                        height={sizes.textFieldIconSize}
                                        width={sizes.textFieldIconSize}
                                        fill={color}
                                    />
                                )}
                      </CircularIconButton>
                  )}
        </Popover>
    );
}
