import React, { memo, useCallback } from 'react';
import { useSimpleTabBarItemColor } from './hooks/useSimpleTabBarItemColor';
import { SimpleTabBarItemContainer } from './components/SimpleTabBarItemContainer';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { useTabBarPosition } from '../../TabBar/hooks/useTabBarPosition';
import { Layer, Text, useTheme } from '@bma98/fractal-ui';

const tabBarItemCompactSpacerSize = { width: 0, height: 0 };
const tabBarItemLargeVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemLargeHorizontalSpacerSize = { width: 8, height: 1 };

export interface SimpleTabBarItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}

export const SimpleTabBarItem = memo(
    ({ active = false, title, children, tabIdentifier, onTabPress }: SimpleTabBarItemProps): JSX.Element => {
        const color = useSimpleTabBarItemColor(active);
        const [widthSizeType] = useWidthSizeGroup();
        const tabBarPosition = useTabBarPosition();
        const { tabBar } = useTheme();

        const renderItem = useCallback(
            (size: number) => {
                return children(color, size);
            },
            [color, children]
        );

        const spacerSize = getValueForLargeSizeType(
            widthSizeType,
            tabBarPosition !== 'bottom' ? tabBarItemLargeVerticalSpacerSize : tabBarItemLargeHorizontalSpacerSize,
            tabBarItemCompactSpacerSize
        );

        return (
            <SimpleTabBarItemContainer tabIdentifier={tabIdentifier} onTabPress={onTabPress} icon={renderItem}>
                <Layer {...spacerSize} />
                <Text
                    {...tabBar.tabBarItemText}
                    numberOfLines={1}
                    overflow={'hidden'}
                    width={tabBar.iOSHorizontalWidth - 1}
                    display='block'
                    variant='label'
                    textOverflow='ellipsis'
                    color={color}
                >
                    {title}
                </Text>
            </SimpleTabBarItemContainer>
        );
    }
);

SimpleTabBarItem.displayName = 'SimpleTabBarItem';
