import React, { useState } from 'react';
import { Box, useTheme, Button, Layer } from '@bma98/fractal-ui';
import { PieChart, PieChartData } from '@bma98/fractal-charts';
import { getValueForLargeSizeType, useWidthSizeGroup } from '@bma98/size-class';

interface Props {
    data: Array<PieChartData>;
}

export function PieChartExample({ data }: Props): JSX.Element {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);
    const [type] = useWidthSizeGroup();
    const { spacings } = useTheme();

    const handleIndex = (index: number) => {
        setSelectedIndex(index);
    };

    const flexDirection = getValueForLargeSizeType(type, 'row', 'column');

    return (
        <Box marginBottom={spacings.m}>
            <PieChart height={200} data={data} selectedSliceIndex={selectedIndex} />
            <Layer
                flexDirection={flexDirection}
                justifyContent={flexDirection == 'row' ? 'space-evenly' : undefined}
                marginTop={spacings.m}
            >
                <Button
                    text={'One'}
                    onPress={() => handleIndex(0)}
                    minWidth={120}
                    backgroundColor={data[0].color}
                    marginBottom={flexDirection == 'column' ? spacings.m : 0}
                />
                <Button
                    text={'Two'}
                    onPress={() => handleIndex(1)}
                    minWidth={120}
                    backgroundColor={data[1].color}
                    marginBottom={flexDirection == 'column' ? spacings.m : 0}
                />
                <Button text={'Three'} onPress={() => handleIndex(2)} minWidth={120} backgroundColor={data[2].color} />
            </Layer>
        </Box>
    );
}
