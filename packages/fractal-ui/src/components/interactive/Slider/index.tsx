import React, { forwardRef } from 'react';
import { SliderProps } from './types';
import { BaseSlider } from './BaseSlider';
import { Layer } from '../../layout';

const Slider = forwardRef(
    (
        {
            defaultValue,
            minimumValue,
            maximumValue,
            onValueChange,
            onSlidingStart,
            onSlidingComplete,
            step,
            name,
            value,
            ...layerProps
        }: SliderProps,
        ref: any
    ): JSX.Element => (
        <Layer ref={ref} {...layerProps}>
            <BaseSlider
                defaultValue={defaultValue}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                onValueChange={onValueChange}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSlidingComplete}
                step={step}
                name={name}
                value={value}
            />
        </Layer>
    )
);

Slider.displayName = 'Slider';

export { Slider };
