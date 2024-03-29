import * as React from 'react';

import { useTheme } from '../../../core';
import { Layer } from '../../layout';

interface Props {
    values: number;
    selectedIndex?: number;
}

export function SegmentsSeparators({ values, selectedIndex }: Props): JSX.Element {
    const { colors } = useTheme();
    const hide = (value: number) => selectedIndex === value || selectedIndex === value + 1;

    return (
        <Layer
            position='absolute'
            top={0}
            left={0}
            right={0}
            bottom={0}
            flexDirection='row'
            alignItems='center'
            justifyContent='space-evenly'
        >
            {[...Array.from(new Array(values - 1).keys())].map((value) => (
                <Layer key={value} width={1} height='50%' backgroundColor={hide(value) ? 'transparent' : colors.placeholder} />
            ))}
        </Layer>
    );
}
