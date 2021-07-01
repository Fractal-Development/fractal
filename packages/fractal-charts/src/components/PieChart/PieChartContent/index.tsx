import React from 'react';
import { PieChartContentProps } from './types';

export function PieChartContent({ width, height, data, pieSlices, createArc, onPress }: PieChartContentProps): JSX.Element {
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${width / 2} ${height / 2})`}>
                {pieSlices.map((slice, index) => {
                    const { color } = data[index];
                    return <path key={`pie-${index}`} fill={color} onClick={() => onPress?.(index)} d={createArc(slice) ?? undefined} />;
                })}
            </g>
        </svg>
    );
}
