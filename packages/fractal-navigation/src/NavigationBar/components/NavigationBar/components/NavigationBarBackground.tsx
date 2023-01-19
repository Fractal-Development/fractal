import React, { memo, ReactElement } from 'react';
import { Layer, useTheme } from '@bma98/fractal-ui';
import { useSafeAreaInsets } from '../../../../TabBar/hooks';

interface NavigationBarBackgroundProps {
    children: ReactElement | Array<ReactElement>;
    backgroundColor?: string;
    disabledSafeAreaInsets?: boolean;
}

export const NavigationBarBackground = memo(
    ({ children, backgroundColor, disabledSafeAreaInsets }: NavigationBarBackgroundProps): ReactElement => {
        const { spacings, navigationBar } = useTheme();
        const safeAreaInsets = useSafeAreaInsets();

        return (
            <Layer
                backgroundColor={backgroundColor || navigationBar.backgroundColor}
                boxShadow={navigationBar.shadow}
                zIndex={2000}
                paddingTop={disabledSafeAreaInsets ? undefined : safeAreaInsets.top}
                paddingLeft={spacings.m}
                paddingRight={spacings.m}
                position='absolute'
                top={0}
                left={0}
                right={0}
            >
                <Layer height={navigationBar.height} flexDirection='row'>
                    {children}
                </Layer>
            </Layer>
        );
    }
);

NavigationBarBackground.displayName = 'NavigationBarBackground';
