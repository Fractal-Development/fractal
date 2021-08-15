import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useTabBarInsets } from '../../../../TabBar/hooks/useTabBarInsets';

interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
}

export const NavigationBarBackground = memo(({ children }: NavigationBarBackgroundProps): ReactElement => {
    const { spacings, navigationBar } = useTheme();
    const { left, right } = useTabBarInsets();

    return (
        <Layer
            backgroundColor={navigationBar.backgroundColor}
            flexDirection='row'
            height={navigationBar.height}
            boxShadow={navigationBar.shadow}
            zIndex={2000}
            paddingLeft={spacings.m}
            paddingRight={spacings.m}
            position={'absolute'}
            top={0}
            left={left}
            right={right}
        >
            {children}
        </Layer>
    );
});

NavigationBarBackground.displayName = 'NavigationBarBackground';
