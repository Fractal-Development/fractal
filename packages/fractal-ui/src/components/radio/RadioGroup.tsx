import React, { forwardRef } from 'react';
import { Layer } from '../containers/Layer';
import { RadioGroupProps, RadioItem } from './types';
import { useControllableState } from '../../hooks/useControllableState';
import { RadioGroupItem } from './RadioGroupItem';
import { getRadioGroupAccessibilityProps } from './accessibility/getRadioGroupAccessibilityProps';

const RadioGroup = forwardRef(({ value, defaultValue, radioButtons, onValueChange, ...others }: RadioGroupProps, ref: any): JSX.Element => {
    const [activeValue, setActiveValue] = useControllableState(value, defaultValue ?? '', onValueChange);
    const { flexDirection } = others;

    const handleChange = (value: string): void => setActiveValue(value);

    // Memoizing the callback is hard because it depends on the active value, so it will be re generated everytime it changes.
    // It makes more sense to create a new component that depends only on primitives, and memoize that.
    const renderRadioButton = (item: RadioItem, index: number): JSX.Element => {
        return (
            <RadioGroupItem
                key={item.value}
                item={item}
                isLastItem={index === radioButtons.length - 1}
                flexDirection={flexDirection}
                active={item.value == activeValue}
                handleChange={handleChange}
            />
        );
    };

    return (
        <Layer ref={ref} {...others} {...getRadioGroupAccessibilityProps()}>
            {radioButtons.map(renderRadioButton)}
        </Layer>
    );
});

RadioGroup.displayName = 'RadioGroup';

export { RadioGroup };
