import React, { forwardRef, Ref } from 'react';

import { Layer, LayerProps } from '../../../layout';

const ModalContent = forwardRef(({ children, ...others }: LayerProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    return (
        <Layer ref={ref} position='fixed' top={0} right={0} bottom={0} left={0} zIndex={2} {...others}>
            {children}
        </Layer>
    );
});

ModalContent.displayName = 'ModalContent';

export { ModalContent };
