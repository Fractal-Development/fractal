import React, { ReactElement, ReactNode } from 'react';
import { NavigationBar, NavigationBarProps } from '@fractal/fractal-navigation';
import { Layer, useTheme } from '@fractal/fractal-ui';
import { useNavigate } from '../router';

interface StackScreenWrapperProps {
    children: ReactNode;
    navBarProps?: Partial<NavigationBarProps>;
}

export function StackScreenWrapper({ navBarProps, children }: StackScreenWrapperProps): ReactElement {
    const { colors } = useTheme();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <NavigationBar goBack={goBack} {...navBarProps} />
            <Layer backgroundColor={colors.background} flexGrow={1} flexBasis={1}>
                {children}
            </Layer>
        </>
    );
}
