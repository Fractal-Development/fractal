import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { navigationBarBackgroundCSSPosition } from './navigationBarBackgroundCSSPosition';
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
            zIndex={2000}
            paddingLeft={spacings.m}
            paddingRight={spacings.m}
            position={navigationBarBackgroundCSSPosition}
            top={0}
            left={left}
            right={right}
        >
            {children}
        </Layer>
    );
});

NavigationBarBackground.displayName = 'NavigationBarBackground';
