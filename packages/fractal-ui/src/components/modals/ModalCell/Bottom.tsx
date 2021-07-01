import React from 'react';
import { LayerProps } from '../../containers/Layer/types';
import { useTheme } from '../../../core';
import { ModalCellSharedStyles } from './ModalCellSharedStyles';

const bottomCellAnimationStyles = {
    initial: { scale: 0 },
    animate: { scale: 1 }
};

function BottomCellSharedStyles(props: LayerProps): JSX.Element {
    const { spacings } = useTheme();

    return (
        <ModalCellSharedStyles
            initial={bottomCellAnimationStyles.initial}
            animate={bottomCellAnimationStyles.animate}
            exit={bottomCellAnimationStyles.initial}
            margin={spacings.m}
            {...props}
        />
    );
}

export function BottomCellDesktop(props: LayerProps): JSX.Element {
    return <BottomCellSharedStyles maxWidth={550} maxHeight={'50%'} width={'60%'} minHeight={300} {...props} />;
}

export function BottomCellPhone(props: LayerProps): JSX.Element {
    return <BottomCellSharedStyles alignSelf={'stretch'} minHeight={300} maxHeight={'50%'} {...props} />;
}
