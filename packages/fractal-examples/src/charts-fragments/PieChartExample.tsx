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

    const flexDirection = getValueForLargeSizeType(type, 'row', 'column');
    const marginBottom = getValueForLargeSizeType(type, 0, spacings.m);
    const marginRight = getValueForLargeSizeType(type, spacings.m, 0);

    const handleIndex = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Box marginBottom={spacings.m}>
            <PieChart height={200} data={data} selectedSliceIndex={selectedIndex} flexDirection={flexDirection} />
            <Layer flexDirection={getValueForLargeSizeType(type, 'row', 'column')} marginTop={spacings.m} marginBottom={spacings.m}>
                <Button
                    variant={'main'}
                    minWidth={120}
                    marginBottom={marginBottom}
                    marginRight={marginRight}
                    text={'One'}
                    onPress={() => handleIndex(0)}
                />
                <Button
                    variant={'alternative'}
                    minWidth={120}
                    marginBottom={marginBottom}
                    marginRight={marginRight}
                    text={'Two'}
                    onPress={() => handleIndex(1)}
                />
                <Button variant={'success'} minWidth={120} text={'Three'} onPress={() => handleIndex(2)} />
            </Layer>
        </Box>
    );
}
