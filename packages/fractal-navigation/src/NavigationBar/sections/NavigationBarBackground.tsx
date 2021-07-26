import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { cssPosition } from '../nativeNavigationBarViews/cssPosition';
import { useTabBarInsets } from '../../TabBar/hooks/useTabBarInsets';

interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
}

export const NavigationBarBackground = memo(({ children }: NavigationBarBackgroundProps): ReactElement => {
    const { spacings, shadows, colors } = useTheme();
    const { left, right } = useTabBarInsets();

    return (
        <Layer
            backgroundColor={colors.foreground}
            flexDirection='row'
            height={50}
            boxShadow={shadows.mainShadow}
            width={'100%'}
            zIndex={2000}
            paddingLeft={spacings.m}
            paddingRight={spacings.m}
            position={cssPosition}
            top={0}
            left={left !== 0 ? left : undefined}
            right={right !== 0 ? right : undefined}
        >
            {children}
        </Layer>
    );
});

NavigationBarBackground.displayName = 'NavigationBarBackground';
