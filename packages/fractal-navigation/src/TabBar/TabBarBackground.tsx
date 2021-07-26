import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { TabBarProps } from './types';
import { useTabBarPositionValues, useTabBarSafeAreaPadding } from './hooks';
import { cssPosition } from './cssPosition';

export function TabBarBackground(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const { colors, shadows } = useTheme();

    return (
        <Layer
            backgroundColor={colors.foreground}
            boxShadow={shadows.mainShadow}
            justifyContent={'center'}
            position={cssPosition}
            zIndex={3000}
            {...props}
            {...positionValues}
            {...tabBarSafeAreaPadding}
        />
    );
}
