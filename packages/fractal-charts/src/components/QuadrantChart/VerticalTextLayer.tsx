import React from 'react';
import { Layer } from '@fractal-software/fractal-ui';
import { CenteredText } from './CenteredText';
import { VerticalLayer } from './VerticalLayer';

interface VerticalTextLayerProps {
    text: string;
    textColor?: string;
}

export function VerticalTextLayer({ text, textColor }: VerticalTextLayerProps): JSX.Element {
    return (
        <Layer height={130} width={24} position='relative'>
            <VerticalLayer>
                <Layer flex={1} alignItems='center'>
                    <CenteredText color={textColor}>{text}</CenteredText>
                </Layer>
            </VerticalLayer>
        </Layer>
    );
}
