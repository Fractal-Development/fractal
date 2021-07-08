import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { RadioControlProps } from '../types';
import { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const circleVariants = {
    active: { scale: 1 },
    inactive: { scale: 0 }
};

export function RadioControl({ active, label }: RadioControlProps): JSX.Element {
    const { colors, sizes, spacings } = useTheme();
    const [currentVariant, setCurrentVariant] = useState('from');

    const ringVariants = useMemo(() => {
        return { from: { borderColor: colors.placeholder }, active: { borderColor: colors.mainInteractiveColor } };
    }, [colors]);

    useEffect(() => {
        setCurrentVariant(active ? 'active' : 'from');
    }, [active]);

    return (
        <>
            <Layer
                width={sizes.radioButtonSize}
                height={sizes.radioButtonSize}
                display={'flex'}
                flexShrink={0}
                borderRadius={sizes.radioButtonSize / 2}
                borderWidth={2}
                alignItems={'center'}
                borderStyle={'solid'}
                justifyContent={'center'}
                variants={ringVariants}
                currentVariant={currentVariant}
            >
                <AnimatePresence>
                    {active && (
                        <Layer
                            width={10}
                            height={10}
                            borderRadius={10}
                            backgroundColor={colors.mainInteractiveColor}
                            from={circleVariants.inactive}
                            animate={circleVariants.active}
                            exit={circleVariants.inactive}
                        />
                    )}
                </AnimatePresence>
            </Layer>
            {label && (
                <Text marginLeft={spacings.xs} variant='normal'>
                    {label}
                </Text>
            )}
        </>
    );
}
