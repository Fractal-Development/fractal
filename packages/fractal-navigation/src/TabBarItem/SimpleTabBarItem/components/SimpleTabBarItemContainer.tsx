import React, { memo, ReactElement } from 'react';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';
import { Pressable } from '@bma98/fractal-ui';
import { useTabBarPosition } from '../../../TabBar/hooks/useTabBarPosition';

export interface BasicTabBarItemProps {
    icon: (iconSize: number) => ReactElement;
    children: Array<ReactElement> | ReactElement;
}

export const SimpleTabBarItemContainer = memo(({ children, icon }: BasicTabBarItemProps): ReactElement => {
    const [widthSizeType] = useWidthSizeGroup();
    const tabBarPosition = useTabBarPosition();
    const flexDirection = tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSizeType(widthSizeType, 'row', 'column');

    return (
        <Pressable
            flexGrow={1}
            flexDirection={flexDirection}
            justifyContent='center'
            alignItems='center'
            minHeight={48}
            minWidth={48}
            cursor='pointer'
        >
            {icon(24)}
            {children}
        </Pressable>
    );
});

SimpleTabBarItemContainer.displayName = 'SimpleTabBarItemContainer';
