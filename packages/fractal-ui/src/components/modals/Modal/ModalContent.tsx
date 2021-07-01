import React, { useEffect, forwardRef, Ref } from 'react';
import { Layer } from '../../containers';
import { LayerProps } from '../../containers/Layer/types';

const ModalContent = forwardRef(({ children, ...others }: LayerProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'scroll';
        };
    }, []);

    return (
        <Layer ref={ref} position={'fixed'} top={0} right={0} bottom={0} left={0} zIndex={2} {...others}>
            {children}
        </Layer>
    );
});

ModalContent.displayName = 'ModalContent';

export { ModalContent };
