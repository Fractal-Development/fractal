import React, { useState, useCallback } from 'react';
import { BaseButton, Text, useTheme } from '@bma98/fractal-ui';

interface RateToggleButtonProps {
    onChangeRate: (rate: number) => void;
}

export function RateToggleButton({ onChangeRate }: RateToggleButtonProps): JSX.Element {
    const [rate, setRate] = useState(1);
    const { colors, borderRadius } = useTheme();

    const toggleRate = useCallback(() => {
        let newRate = 1;
        if (rate === 1) {
            newRate = 1.5;
        }
        if (rate === 1.5) {
            newRate = 2;
        }
        setRate(newRate);
        onChangeRate(newRate);
    }, [onChangeRate, rate]);

    return (
        <BaseButton
            backgroundColor={colors.mainInteractiveColor}
            width={36}
            height={24}
            alignItems='center'
            justifyContent='center'
            borderRadius={borderRadius.m}
            onPress={toggleRate}
        >
            <Text variant='normal' color='white' fontSize={12}>{`${rate}x`}</Text>
        </BaseButton>
    );
}
