import React, { memo, useCallback } from 'react';
import { useSimpleTabBarItemColor } from './hooks/useSimpleTabBarItemColor';
import { SimpleTabBarItemContainer } from './components/SimpleTabBarItemContainer';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';
import { Layer, LayerProps, spacings, Text, useTheme } from '@bma98/fractal-ui';
import { SharedTabItemProps } from '../../types/SharedTabItemProps';
import { justifyContent } from './util/justifyContent';

const tabBarItemCompactVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemCompactHorizontalSpacerSize = { width: 0, height: 2 };

const tabBarItemLargeVerticalSpacerSize = { width: 1, height: 4 };
const tabBarItemLargeHorizontalSpacerSize = { width: 4, height: 1 };

export interface SimpleTabBarItemProps extends SharedTabItemProps, LayerProps {
    title?: string;
    children: (color: string, size: number) => JSX.Element;
    active?: boolean;
}

export const SimpleTabBarItem = memo(
    ({ active = false, title, children, tabIdentifier, onTabPress, ...others }: SimpleTabBarItemProps): JSX.Element => {
        const color = useSimpleTabBarItemColor(active);
        const [widthSizeType] = useWidthSizeGroup();
        const tabBarPosition = useTabBarPosition();
        const { tabBar } = useTheme();

        const textWidth = tabBarPosition !== 'bottom' ? tabBar.iOSHorizontalWidth - spacings.m : undefined;

        const renderItem = useCallback(
            (size: number) => {
                return children(color, size);
            },
            [color, children]
        );

        const spacerSize = getValueForLargeSizeType(
            widthSizeType,
            tabBarPosition !== 'bottom' ? tabBarItemLargeVerticalSpacerSize : tabBarItemLargeHorizontalSpacerSize,
            tabBarPosition !== 'bottom' ? tabBarItemCompactVerticalSpacerSize : tabBarItemCompactHorizontalSpacerSize
        );

        return (
            <SimpleTabBarItemContainer tabIdentifier={tabIdentifier} onTabPress={onTabPress} icon={renderItem} {...others}>
                <Layer {...spacerSize} />
                <Text
                    {...tabBar.tabBarItemText}
                    numberOfLines={1}
                    overflow={'hidden'}
                    width={textWidth}
                    display='block'
                    variant='label'
                    textOverflow='ellipsis'
                    textAlign='center'
                    justifyContent={justifyContent}
                    color={color}
                >
                    {title}
                </Text>
            </SimpleTabBarItemContainer>
        );
    }
);

SimpleTabBarItem.displayName = 'SimpleTabBarItem';
