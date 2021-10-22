import React, { ReactElement, useCallback, useState } from 'react';
import { Box, Layer, LayerProps, ScrollView } from '../../layout';
import { useTheme } from '../../../context';
import { ColorTab, ColorTabProps } from './ColorTab';

export interface ColorTabListProps extends LayerProps {
    tabs: Array<ColorTabProps>;
    defaultActiveIndex: number;
    children: (index: number) => ReactElement;
    onItemPress?: (index?: number) => void;
}

export function ColorTabList({ children, tabs, defaultActiveIndex, onItemPress, ...others }: ColorTabListProps): ReactElement {
    const { borderRadius } = useTheme();
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
    const { tabColor } = tabs[activeIndex];

    const handlePress = useCallback(
        (index: number) => {
            setActiveIndex(index);
            onItemPress?.(index);
        },
        [onItemPress]
    );

    return (
        <Layer {...others}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                {tabs.map((props, index) => (
                    <ColorTab key={index} {...props} onPress={handlePress} index={index} active={index === activeIndex} />
                ))}
            </ScrollView>
            <Box
                borderTopLeftRadius={activeIndex !== 0 ? borderRadius.m : 0}
                borderTopRightRadius={borderRadius.m}
                width='100%'
                flex={1}
                animate={{ backgroundColor: tabColor }}
                transition={{ type: 'timing' }}
            >
                {children(activeIndex)}
            </Box>
        </Layer>
    );
}
