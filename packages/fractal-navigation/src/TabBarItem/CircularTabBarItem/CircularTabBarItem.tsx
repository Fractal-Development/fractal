import React from 'react';
import { CircularIconButton, Layer } from '@bma98/fractal-ui';
import { ReactElement, useCallback } from 'react';
import { useTabPress } from '../hooks/useTabPress';
import { CircularTabBarItemProps } from './types/CircularTabBarItemProps';

export function CircularTabBarItem({ children, ...others }: CircularTabBarItemProps): ReactElement {
    const renderChildren = useCallback(() => {
        return children('white', 24);
    }, [children]);
    const handlePress = useTabPress(others);

    return (
        <Layer>
            <CircularIconButton borderRadius={24} height={48} width={48} {...others} onPress={handlePress}>
                {renderChildren}
            </CircularIconButton>
        </Layer>
    );
}
