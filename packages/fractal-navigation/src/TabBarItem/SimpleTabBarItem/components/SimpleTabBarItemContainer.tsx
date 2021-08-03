import React, { memo, ReactElement, useCallback } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable, useTheme } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';

export interface BasicTabBarItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}

export const SimpleTabBarItemContainer = memo(({ children, icon, onTabPress, tabIdentifier }: BasicTabBarItemProps): ReactElement => {
    const { tabBar, spacings } = useTheme();
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');
    const flexGrow = tabBarPosition === 'bottom' ? 1 : undefined;
    const marginBottom = tabBarPosition === 'bottom' ? spacings.m : undefined;

    const handlePress = useCallback(() => {
        onTabPress?.(tabIdentifier);
    }, [onTabPress, tabIdentifier]);

    return (
        <Pressable
            flexGrow={flexGrow}
            flexDirection={flexDirection}
            marginBottom={marginBottom}
            justifyContent='center'
            alignItems='center'
            minHeight={tabBar.iOSVerticalHeight - 1}
            minWidth={tabBar.iOSHorizontalWidth - 1}
            cursor='pointer'
            onPress={handlePress}
        >
            {icon(24)}
            {children}
        </Pressable>
    );
});

SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
