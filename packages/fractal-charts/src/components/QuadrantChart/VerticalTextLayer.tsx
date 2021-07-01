import React from 'react';
import { Layer } from '@bma98/fractal-ui';
import { CenteredText } from './CenteredText';
import { useVerticalTransform } from './useVerticalTransform';

interface VerticalTextLayerProps {
    text: string;
    textColor?: string;
}

export function VerticalTextLayer({ text, textColor }: VerticalTextLayerProps): JSX.Element {
    const verticalTransform = useVerticalTransform();
    return (
        <Layer height={130} width={24} position={'relative'}>
            <CenteredText width={130} height={24} position={'absolute'} color={textColor} style={{ ...verticalTransform }}>
                {text}
            </CenteredText>
        </Layer>
    );
}
