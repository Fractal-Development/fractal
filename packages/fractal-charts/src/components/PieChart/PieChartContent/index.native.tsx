import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { PieChartContentProps } from './types';

export function PieChartContent({ width, height, data, pieSlices, createArc, onPress }: PieChartContentProps): JSX.Element {
    return (
        <Svg style={{ height, width }}>
            <G x={width / 2} y={height / 2}>
                {pieSlices.map((slice, index) => {
                    const { color } = data[index];
                    return <Path key={`pie-${index}`} fill={color} onPress={() => onPress?.(index)} d={createArc(slice) ?? undefined} />;
                })}
            </G>
        </Svg>
    );
}
