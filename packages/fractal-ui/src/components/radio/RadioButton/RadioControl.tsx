import React from 'react';
import { useTheme } from '../../../context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { RadioControlProps } from '../types';

const circleVariants = {
    active: { scale: 1 },
    inactive: { scale: 0 }
};

export function RadioControl({ active, label }: RadioControlProps): JSX.Element {
    const { colors, sizes, spacings } = useTheme();

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
                borderColor={active ? colors.mainInteractiveColor : colors.placeholder}
            >
                <Layer
                    width={10}
                    height={10}
                    borderRadius={10}
                    backgroundColor={colors.mainInteractiveColor}
                    initial={'inactive'}
                    animate={active ? 'active' : 'inactive'}
                    variants={circleVariants}
                />
            </Layer>
            {label && (
                <Text marginLeft={spacings.xs} variant='normal'>
                    {label}
                </Text>
            )}
        </>
    );
}
