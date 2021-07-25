import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';

interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
}

export const NavigationBarBackground = memo(({ children }: NavigationBarBackgroundProps): ReactElement => {
    const { spacings, shadows, colors } = useTheme();

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
        >
            {children}
        </Layer>
    );
});
