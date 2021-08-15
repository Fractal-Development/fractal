import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';

interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
}

export const NavigationBarBackground = memo(({ children }: NavigationBarBackgroundProps): ReactElement => {
    const { spacings, navigationBar } = useTheme();

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
            left={0}
            right={0}
        >
            {children}
        </Layer>
    );
});

NavigationBarBackground.displayName = 'NavigationBarBackground';
