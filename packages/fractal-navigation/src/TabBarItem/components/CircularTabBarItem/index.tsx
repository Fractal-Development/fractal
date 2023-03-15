import React, { ReactElement, useCallback } from 'react';
import { Button } from '@fractal/fractal-ui';
import { useTabPress } from '../../hooks/useTabPress';
import { CircularTabBarItemProps } from './types/CircularTabBarItemProps';

export function CircularTabBarItem({ children, onTabPress, tabIdentifier, ...others }: CircularTabBarItemProps): ReactElement {
    const renderChildren = useCallback(() => children('white', 28), [children]);
    const handlePress = useTabPress(tabIdentifier, onTabPress);

    return (
        <Button borderRadius={24} height={48} width={48} {...others} onPress={handlePress}>
            {renderChildren}
        </Button>
    );
}
