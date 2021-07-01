import React from 'react';
import { Grid } from '../../Grid';
import { LinearGradient } from '../LinearGradient';
import { AreaChartContentProps } from './types';

export function AreaChartContent({
    width,
    height,
    ticks,
    x,
    y,
    coordinates,
    paths,
    areaColor,
    lineColor,
    lineWidth,
    dotRadius,
    gradientConfig
}: AreaChartContentProps): JSX.Element {
    return (
        <svg width={width} height={height}>
            <Grid ticks={ticks} y={y} />
            <path fill={gradientConfig ? 'url(#gradient)' : areaColor} d={paths.path ?? undefined} />
            <path d={paths.line ?? undefined} stroke={lineColor ?? areaColor} strokeWidth={lineWidth} fill={'none'} />
            <g>
                {coordinates.map((dot) => {
                    return (
                        <circle
                            key={`dot-${dot.x}-${dot.y}`}
                            cx={x?.(dot.x)}
                            cy={y(dot.y)}
                            r={dotRadius ?? 3}
                            fill={lineColor ?? areaColor}
                        ></circle>
                    );
                })}
            </g>
            {gradientConfig && (
                <LinearGradient
                    startColor={gradientConfig.startColor}
                    startOpacity={gradientConfig.startOpacity}
                    endColor={gradientConfig.endColor}
                    endOpacity={gradientConfig.endOpacity}
                />
            )}
        </svg>
    );
}
