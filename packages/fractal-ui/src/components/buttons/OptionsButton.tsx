import React, { forwardRef } from 'react';
import { ThreeDotsIcon } from '../../assets/ThreeDotsIcon';
import { useTheme } from '../../context/hooks/useTheme';
import { BaseButton } from './BaseButton';
import { ActionButtonProps } from './types';

const OptionsButton = forwardRef(({ size = 24, ...others }: ActionButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return (
        <BaseButton ref={ref} height={size} width={size} justifyContent='center' alignItems='center' aria-label='Options' {...others}>
            <ThreeDotsIcon height={size} width={size} fill={colors.text} />
        </BaseButton>
    );
});

OptionsButton.displayName = 'CrossButton';

export { OptionsButton };
