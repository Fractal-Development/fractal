import React, { forwardRef } from 'react';

import { CloseIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { BaseButton } from './BaseButton';
import { getCrossButtonAccessibilityProps } from './accessibility/getCrossButtonAccessibilityProps';
import { ActionButtonProps } from './types';

const CrossButton = forwardRef(({ size = 24, ...others }: ActionButtonProps, ref: any): JSX.Element => {
    const { colors } = useTheme();
    return (
        <BaseButton
            ref={ref}
            height={size}
            width={size}
            justifyContent='center'
            alignItems='center'
            {...getCrossButtonAccessibilityProps()}
            {...others}
        >
            <CloseIcon height={size} width={size} fill={colors.text} />
        </BaseButton>
    );
});

CrossButton.displayName = 'CrossButton';

export { CrossButton };
