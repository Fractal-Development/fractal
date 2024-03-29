import React, { memo, ReactNode, useCallback } from 'react';
import { Layer } from '@fractal-software/fractal-ui';
import { ChevronLeft } from '../../assets';
import { NavigationBarButton } from '../../buttons';

interface NavigationBarLeftProps {
    children?: ReactNode;
    showBackButton: boolean;
    backTitle?: string;
    goBack: () => void;
}

export const NavigationBarLeft = memo(({ children, showBackButton, backTitle, goBack }: NavigationBarLeftProps): JSX.Element => {
    const renderChevronLeft = useCallback(
        (color) => (
            <Layer marginRight={2}>
                <ChevronLeft height={20} width={20} fill={color} />
            </Layer>
        ),
        []
    );

    return (
        <Layer justifyContent='flex-start' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
            {showBackButton ? (
                <NavigationBarButton leftIcon={renderChevronLeft} onPress={goBack}>
                    {backTitle}
                </NavigationBarButton>
            ) : null}
            {children}
        </Layer>
    );
});

NavigationBarLeft.displayName = 'NavigationBarLeft';
