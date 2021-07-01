import React, { useState, forwardRef } from 'react';
import { LayerProps } from '../containers/Layer/types';
import { Pressable } from '../buttons';
import { Layer } from '../containers';
import { CheckIcon } from '../../assets/CheckIcon';

export interface ColorToggleProps extends LayerProps {
    onActiveChange?: (active: boolean, color: string) => void;
    backgroundColor: string;
    active?: boolean;
}

const styleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
};

function getVariant(active?: boolean): typeof styleVariants.visible {
    return active ? styleVariants.visible : styleVariants.hidden;
}

const ColorToggle = forwardRef(({ onActiveChange, backgroundColor, active, ...others }: ColorToggleProps, ref: any): JSX.Element => {
    const [uncontrolledActive, setUncontrolledActive] = useState(!!active);
    const variant = getVariant(active != null ? active : uncontrolledActive);

    const handleControlledActiveToggle = () => {
        if (onActiveChange) {
            onActiveChange(!active, backgroundColor);
        }
    };

    const handleUncontrolledActiveToggle = () => {
        setUncontrolledActive((uncontrolledActive) => {
            const newValue = !uncontrolledActive;
            if (onActiveChange != null) {
                onActiveChange(newValue, backgroundColor);
            }
            return newValue;
        });
    };

    const handlePress = () => {
        if (active != null) {
            handleControlledActiveToggle();
        } else {
            handleUncontrolledActiveToggle();
        }
    };

    return (
        <Pressable
            ref={ref}
            onPress={handlePress}
            width={40}
            height={40}
            borderRadius={20}
            justifyContent={'center'}
            alignItems={'center'}
            backgroundColor={backgroundColor}
            {...others}
        >
            <Layer initial={variant} animate={variant} variants={styleVariants}>
                <CheckIcon height={24} width={24} fill={'white'} />
            </Layer>
        </Pressable>
    );
});

ColorToggle.displayName = 'ColorToggle';

export { ColorToggle };
