import React from 'react';
import { BaseButton, useTheme } from '@bma98/fractal-ui';
import { StarIcon } from '../assets/StarIcon';
import { UploadIcon } from '../assets/UploadIcon';

export interface RoundedIconButtonProps {
    iconName: 'star' | 'upload';
    color: string;
    onPress?: () => void;
}

export function RoundedIconButton({ iconName, color, onPress }: RoundedIconButtonProps): JSX.Element {
    const { sizes, shadows } = useTheme();
    return (
        <BaseButton
            backgroundColor={'rgb(255, 255, 255)'}
            width={sizes.interactiveItemHeight}
            height={sizes.interactiveItemHeight}
            borderRadius={sizes.interactiveItemHeight / 2}
            boxShadow={shadows.mainShadow}
            justifyContent={'center'}
            alignItems={'center'}
            onPress={onPress}
        >
            {iconName == 'star' && <StarIcon width={20} height={20} fill={color} />}
            {iconName == 'upload' && <UploadIcon width={20} height={20} fill={color} />}
        </BaseButton>
    );
}
