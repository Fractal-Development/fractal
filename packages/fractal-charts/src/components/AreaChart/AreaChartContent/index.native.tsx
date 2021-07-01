import React from 'react';
import Svg, { Path, G, Circle } from 'react-native-svg';
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
        <Svg style={{ height, width }}>
            <Grid ticks={ticks} y={y} />
            <Path fill={gradientConfig ? 'url(#gradient)' : areaColor} d={paths.path ?? undefined} />
            <Path d={paths.line ?? undefined} stroke={lineColor ?? areaColor} strokeWidth={lineWidth} fill={'none'} />
            <G>
                {coordinates.map((dot) => {
                    return (
                        <Circle
                            key={`dot-${dot.x}-${dot.y}`}
                            cx={x?.(dot.x)}
                            cy={y(dot.y)}
                            r={dotRadius ?? 3}
                            fill={lineColor ?? areaColor}
                        ></Circle>
                    );
                })}
            </G>
            {gradientConfig && (
                <LinearGradient
                    startColor={gradientConfig.startColor}
                    startOpacity={gradientConfig.startOpacity}
                    endColor={gradientConfig.endColor}
                    endOpacity={gradientConfig.endOpacity}
                />
            )}
        </Svg>
    );
}
