import React from 'react';
import { ButtonProps, CircularIconButton } from '@bma98/fractal-ui';
import { ReactElement, useCallback } from 'react';
import { SharedTabItemProps } from '../types/SharedTabItemProps';
import { useTabPress } from '../hooks/useTabPress';

export interface CircularTabBarItemProps extends SharedTabItemProps, Omit<ButtonProps, 'children' | 'onPress'> {
    children: (color: string, size: number) => JSX.Element;
}

export function CircularTabBarItem({ children, ...others }: CircularTabBarItemProps): ReactElement {
    const renderChildren = useCallback(() => {
        return children('white', 24);
    }, [children]);

    const handlePress = useTabPress(others);

    return (
        <CircularIconButton height={48} width={48} {...others} onPress={handlePress}>
            {renderChildren}
        </CircularIconButton>
    );
}
