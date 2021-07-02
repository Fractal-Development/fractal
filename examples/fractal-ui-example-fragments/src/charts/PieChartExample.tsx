import React, { useState } from 'react';
import { Box, HorizontalLayer, useTheme, Button } from '@bma98/fractal-ui';
import { PieChart, PieChartData } from '@bma98/fractal-charts';

interface Props {
    data: Array<PieChartData>;
}

export function PieChartExample({ data }: Props): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
    const { spacings } = useTheme();

    const handleIndex = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Box marginBottom={spacings.m}>
            <PieChart height={200} data={data} selectedSliceIndex={selectedIndex} />
            <HorizontalLayer justifyContent={'space-evenly'} marginTop={20}>
                <Button text={'One'} backgroundColor={data[0].color} onPress={() => handleIndex(0)} />
                <Button text={'Two'} backgroundColor={data[1].color} onPress={() => handleIndex(1)} />
                <Button text={'Three'} backgroundColor={data[2].color} onPress={() => handleIndex(2)} />
            </HorizontalLayer>
        </Box>
    );
}
