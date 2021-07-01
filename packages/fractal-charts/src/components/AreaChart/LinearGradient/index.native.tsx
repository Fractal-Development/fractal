import React from 'react';
import { Defs, LinearGradient as LinearGradientSvg, Stop } from 'react-native-svg';
import { GradientConfig } from '../../../types';

export function LinearGradient({ startColor, startOpacity, endColor, endOpacity }: GradientConfig): JSX.Element {
    return (
        <Defs>
            <LinearGradientSvg id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={startColor} stopOpacity={startOpacity} />
                <Stop offset={'100%'} stopColor={endColor} stopOpacity={endOpacity} />
            </LinearGradientSvg>
        </Defs>
    );
}
