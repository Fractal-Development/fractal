import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { NextIcon } from '../../../assets/NextIcon';
import { PreviousIcon } from '../../../assets/PreviousIcon';
import { SMALL_ICON_SIZE } from './sizes';
import { ControlButtonProps } from './types';
import { getControlButtonAccessibilityProps } from '../accessibility/getControlButtonAccessibilityProps';

export function AudioControlButton({ onPress, variant }: ControlButtonProps): JSX.Element {
    const { colors } = useTheme();
    return (
        <BaseButton
            alignItems={'center'}
            justifyContent={'center'}
            width={36}
            height={36}
            onPress={onPress}
            {...getControlButtonAccessibilityProps(variant)}
        >
            {variant == 'previous' ? (
                <PreviousIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
            ) : (
                <NextIcon fill={colors.text} width={SMALL_ICON_SIZE} height={SMALL_ICON_SIZE} />
            )}
        </BaseButton>
    );
}
