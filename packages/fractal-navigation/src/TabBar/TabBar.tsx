import React from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { TabBarProps } from './types';
import { useTabBarPositionValues, useTabBarSafeAreaPadding } from './hooks';

export function TabBar(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(tabBarPosition);
    const { colors, shadows } = useTheme();

    return (
        <Layer
            style={tabBarSafeAreaPadding}
            backgroundColor={colors.foreground}
            boxShadow={shadows.mainShadow}
            justifyContent={'center'}
            position={'absolute'}
            {...props}
            {...positionValues}
        />
    );
}
