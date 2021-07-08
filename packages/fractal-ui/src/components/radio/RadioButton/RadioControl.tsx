import React, { Fragment } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/hooks/useTheme';
import { Layer } from '../../containers/Layer';
import { Text } from '../../text';
import { RadioControlProps } from '../types';
import { useMemo } from 'react';

const circleVariants = {
    active: { backgroundColor: '#8b0000' },
    from: { backgroundColor: '#a9a9a9' }
};

function Circle({ active, ringVariants }: { active: boolean; ringVariants: any }): JSX.Element {
    return <Layer width={10} height={10} borderRadius={10} variants={ringVariants} currentVariant={active ? 'active' : 'from'} />;
}

export function RadioControl({ active, label }: RadioControlProps): JSX.Element {
    const { colors, sizes, spacings } = useTheme();

    const ringVariants = useMemo(() => {
        return { from: { backgroundColor: colors.placeholder }, active: { backgroundColor: colors.mainInteractiveColor } };
    }, [colors]);

    return (
        <Fragment>
            <Layer width={10} height={10} borderRadius={10} variants={ringVariants} currentVariant={active ? 'active' : 'from'} />
            <Layer width={10} height={10} borderRadius={10} variants={ringVariants} currentVariant={active ? 'active' : 'from'} />
        </Fragment>
    );
}
