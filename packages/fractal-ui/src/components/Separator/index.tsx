import React, { forwardRef } from 'react';
import { LayerProps } from '../containers/Layer/types';
import { Layer } from '../containers';
import { useTheme } from '../../context/hooks/useTheme';
import { getSeparatorAccessibilityProps } from './accessibility/getSeparatorAccessibilityProps';

export interface SeparatorProps extends Omit<LayerProps, 'children'> {
    isAtBackgroundLevel?: boolean;
}

const Separator = forwardRef(({ isAtBackgroundLevel, ...others }: SeparatorProps, ref: any): JSX.Element => {
    const { colors } = useTheme();

    return (
        <Layer
            ref={ref}
            height={1}
            width={'100%'}
            backgroundColor={isAtBackgroundLevel ? colors.placeholder : colors.background}
            {...others}
            {...getSeparatorAccessibilityProps()}
        />
    );
});

Separator.displayName = 'Separator';

export { Separator };
