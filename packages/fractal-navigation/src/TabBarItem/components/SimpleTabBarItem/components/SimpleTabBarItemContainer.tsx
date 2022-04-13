import React, { memo, ReactElement } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable, useTheme, LayerProps } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../../TabBar/hooks/useTabBarPosition';
import { SharedTabItemProps } from '../../../types/SharedTabItemProps';
import { useTabPress } from '../../../hooks/useTabPress';

export interface BasicTabBarItemProps extends SharedTabItemProps, Omit<LayerProps, 'children'> {
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}

export const SimpleTabBarItemContainer = memo(
    ({ children, icon, tabIdentifier, onTabPress, ...others }: BasicTabBarItemProps): ReactElement => {
        const { tabBar, spacings } = useTheme();
        const [widthSizeType] = useWidthSizeGroup();
        const tabBarPosition = useTabBarPosition();
        const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');
        const flex = tabBarPosition === 'bottom' ? 1 : undefined;
        const marginBottom = tabBarPosition !== 'bottom' ? spacings.m : undefined;
        const handlePress = useTabPress(tabIdentifier, onTabPress);

        return (
            <Pressable
                flex={flex}
                flexDirection={flexDirection}
                marginBottom={marginBottom}
                justifyContent='center'
                alignItems='center'
                minHeight={tabBar.iOSVerticalHeight - 1}
                minWidth={tabBar.iOSHorizontalWidth - 1}
                cursor='pointer'
                onPress={handlePress}
                {...others}
            >
                {icon(24)}
                {children}
            </Pressable>
        );
    }
);

SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
