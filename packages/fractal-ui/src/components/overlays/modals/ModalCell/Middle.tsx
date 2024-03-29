import React from 'react';

import { useTheme } from '../../../../core';
import { LayerProps } from '../../../layout';
import { ModalCellSharedStyles } from './ModalCellSharedStyles';

const middleCellAnimationStyles = {
    initial: { scale: 0 },
    animate: { scale: 1 }
};

function MiddleCellSharedStyles(props: LayerProps): JSX.Element {
    return (
        <ModalCellSharedStyles
            from={middleCellAnimationStyles.initial}
            animate={middleCellAnimationStyles.animate}
            exit={middleCellAnimationStyles.initial}
            {...props}
        />
    );
}

export function MiddleCellDesktop(props: LayerProps): JSX.Element {
    return <MiddleCellSharedStyles maxWidth={550} maxHeight={550} width='60%' height='60%' {...props} />;
}

export function MiddleCellPhone(props: LayerProps): JSX.Element {
    const { spacings } = useTheme();
    return <MiddleCellSharedStyles alignSelf='stretch' flex={1} margin={spacings.m} {...props} />;
}
