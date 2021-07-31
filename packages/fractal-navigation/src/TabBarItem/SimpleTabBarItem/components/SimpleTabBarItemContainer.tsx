import React, { memo, ReactElement, useCallback } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';

export interface BasicTabBarItemProps {
    tabIdentifier: string;
    onTabPress?: (tabIdentifier: string) => void;
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}

export const SimpleTabBarItemContainer = memo(({ children, icon, onTabPress, tabIdentifier }: BasicTabBarItemProps): ReactElement => {
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');

    const handlePress = useCallback(() => {
        onTabPress?.(tabIdentifier);
    }, [onTabPress, tabIdentifier]);

    return (
        <Pressable
            flexGrow={1}
            flexDirection={flexDirection}
            justifyContent='center'
            alignItems='center'
            minHeight={48}
            minWidth={48}
            cursor='pointer'
            onPress={handlePress}
        >
            {icon(24)}
            {children}
        </Pressable>
    );
});

SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
