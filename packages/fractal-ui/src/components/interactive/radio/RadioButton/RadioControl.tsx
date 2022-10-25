import { AnimatePresence } from 'framer-motion';
import React, { useMemo } from 'react';

import { useTheme } from '../../../../context/hooks/useTheme';
import { Layer } from '../../../layout/Layer';
import { Text } from '../../../text';
import { RadioControlProps } from '../types';

const circleVariants = { from: { scale: 0 }, active: { scale: 1 } };

export function RadioControl({ active, label }: RadioControlProps): JSX.Element {
    const { colors, sizes, spacings } = useTheme();
    const innerSize = sizes.radioButtonSize / 2;

    const ringVariants = useMemo(
        () => ({ from: { borderColor: colors.placeholder }, active: { borderColor: colors.mainInteractiveColor } }),
        [colors]
    );

    return (
        <>
            <Layer
                width={sizes.radioButtonSize}
                height={sizes.radioButtonSize}
                display='flex'
                flexShrink={0}
                borderRadius={sizes.radioButtonSize / 2}
                borderWidth={2}
                alignItems='center'
                borderStyle='solid'
                justifyContent='center'
                variants={ringVariants}
                currentVariant={active ? 'active' : 'from'}
            >
                <AnimatePresence>
                    {active && (
                        <Layer
                            width={innerSize}
                            height={innerSize}
                            borderRadius={innerSize / 2}
                            backgroundColor={colors.mainInteractiveColor}
                            from={circleVariants.from}
                            animate={circleVariants.active}
                            exit={circleVariants.from}
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
