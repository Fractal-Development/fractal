import React, { useState } from 'react';
import { Button } from 'react-native';
import { Box, HorizontalLayer, useTheme } from '@bma98/fractal-ui';
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
                <Button title={'One'} color={data[0].color} onPress={() => handleIndex(0)} />
                <Button title={'Two'} color={data[1].color} onPress={() => handleIndex(1)} />
                <Button title={'Three'} color={data[2].color} onPress={() => handleIndex(2)} />
            </HorizontalLayer>
        </Box>
    );
}
