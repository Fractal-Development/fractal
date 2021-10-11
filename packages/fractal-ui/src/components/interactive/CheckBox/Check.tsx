import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { CheckIcon } from '../../../assets';
import { useTheme } from '../../../context';
import { Layer } from '../../layout/Layer';
import { Text } from '../../text';
import { CheckProps } from './types';

const checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

export function Check({ value, label }: CheckProps): JSX.Element {
    const { colors, sizes, borderRadius, spacings } = useTheme();
    return (
        <>
            <Layer
                width={sizes.checkBoxSize}
                height={sizes.checkBoxSize}
                borderWidth={2}
                borderRadius={borderRadius.xs}
                borderColor={value ? colors.mainInteractiveColor : colors.placeholder}
                overflow="hidden"
                borderStyle="solid"
            >
                <AnimatePresence>
                    {value && (
                        <Layer
                            backgroundColor={colors.mainInteractiveColor}
                            from={checkVariants.hidden}
                            animate={checkVariants.visible}
                            exit={checkVariants.hidden}
                            width="100%"
                            height="100%"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <CheckIcon width={16} height={16} fill={colors.white} />
                        </Layer>
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
