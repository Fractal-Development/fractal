import React from 'react';
import { GradientConfig } from '../../../types';

export function LinearGradient({ startColor, startOpacity, endColor, endOpacity }: GradientConfig): JSX.Element {
    return (
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={startColor} stopOpacity={startOpacity} />
                <stop offset="100%" stopColor={endColor} stopOpacity={endOpacity} />
            </linearGradient>
        </defs>
    );
}
