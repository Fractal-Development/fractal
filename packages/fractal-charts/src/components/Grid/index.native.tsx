import React from 'react';
import { Line, G } from 'react-native-svg';
import { GridProps } from '../../types';

function Horizontal<T>({ ticks = [], y }: GridProps<T>): JSX.Element {
    return (
        <G>
            {ticks.map((tick, index) => (
                <Line key={`${index}`} x1={'0%'} x2={'100%'} y1={y?.(tick)} y2={y?.(tick)} strokeWidth={1} stroke={'rgba(0,0,0,0.2)'} />
            ))}
        </G>
    );
}

function Vertical<T>({ ticks = [], x }: GridProps<T>): JSX.Element {
    return (
        <G>
            {ticks.map((tick, index) => (
                <Line key={index} y1={'0%'} y2={'100%'} x1={x?.(tick)} x2={x?.(tick)} strokeWidth={1} stroke={'rgba(0,0,0,0.2)'} />
            ))}
        </G>
    );
}

function Both<T>(props: GridProps<T>): JSX.Element {
    return (
        <G>
            <Horizontal {...props} />
            <Vertical {...props} />
        </G>
    );
}

export function Grid<T>({ direction = 'HORIZONTAL', ...others }: GridProps<T>): JSX.Element | null {
    if (direction === 'VERTICAL') {
        return <Vertical {...others} />;
    } else if (direction === 'HORIZONTAL') {
        return <Horizontal {...others} />;
    } else if (direction === 'BOTH') {
        return <Both {...others} />;
    }
    return null;
}
