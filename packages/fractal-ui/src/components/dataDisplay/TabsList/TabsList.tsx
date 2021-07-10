import React, { ReactElement, useCallback, useState } from 'react';
import { Layer, LayerProps, ScrollView } from '../../containers';
import { useTheme } from '../../../context';
import { Text } from '../../text';
import { TouchableOpacity } from '../../buttons';

interface ColorTabProps {
    backgroundColor: string;
    textColor: string;
    text: string;
}

interface InternalColorTabProps extends ColorTabProps {
    active?: boolean;
    index?: number;
    onPress: (index?: number) => void;
}

export function ColorTab({ backgroundColor, text, active, textColor, onPress, index }: InternalColorTabProps): ReactElement {
    const { sizes } = useTheme();

    const handlePress = useCallback(() => {
        onPress(index);
    }, [index, onPress]);

    return (
        <TouchableOpacity
            onPress={handlePress}
            backgroundColor={backgroundColor}
            height={sizes.tabListItemHeight}
            width={sizes.tabListItemWidth}
            animate={{ scale: active ? 1 : 0.8 }}
        >
            <Text variant='button' color={textColor}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export interface TabListProps extends LayerProps {
    tabs?: Array<ColorTabProps>;
    children: (index: number) => ReactElement;
    onPress: (index?: number) => void;
}

export function ColorTabList({ children, tabs, onPress, ...others }: TabListProps): ReactElement {
    const { sizes } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePress = useCallback(
        (index: number) => {
            setActiveIndex(index);
            onPress(index);
        },
        [onPress]
    );

    return (
        <Layer {...others}>
            <ScrollView height={sizes.tabListItemHeight} horizontal>
                {tabs?.map((props, index) => (
                    <ColorTab {...props} onPress={handlePress} index={index} active={index === activeIndex} />
                ))}
            </ScrollView>
            {children}
        </Layer>
    );
}
