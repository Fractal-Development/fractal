import React, { ReactElement, useCallback, useState } from 'react';
import { Box, HorizontalLayer, Layer, LayerProps, ScrollView } from '../../layout';
import { useTheme } from '../../../context';
import { useValueForLargeSizeType } from '@bma98/size-class';
import { ColorTab, ColorTabProps } from './ColorTab';

export interface ColorTabListProps extends LayerProps {
    tabs: Array<ColorTabProps>;
    children: (index: number) => ReactElement;
    onItemPress?: (index?: number) => void;
}

export function ColorTabList({ children, tabs, onItemPress, ...others }: ColorTabListProps): ReactElement {
    const { borderRadius, sizes } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);
    const { tabColor } = tabs[activeIndex];
    const borderTopRightRadius = useValueForLargeSizeType('width', borderRadius.m, 0);

    const handlePress = useCallback(
        (index: number) => {
            setActiveIndex(index);
            onItemPress?.(index);
        },
        [onItemPress]
    );

    return (
        <Layer {...others}>
            <HorizontalLayer height={sizes.colorTabListItemHeight}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {tabs.map((props, index) => (
                        <ColorTab key={index} {...props} onPress={handlePress} index={index} active={index === activeIndex} />
                    ))}
                </ScrollView>
            </HorizontalLayer>
            <Box
                borderTopLeftRadius={activeIndex != 0 ? borderRadius.m : 0}
                borderTopRightRadius={borderTopRightRadius}
                width={'100%'}
                flex={1}
                animate={{ backgroundColor: tabColor }}
                transition={{ type: 'timing' }}
            >
                {children(activeIndex)}
            </Box>
        </Layer>
    );
}
