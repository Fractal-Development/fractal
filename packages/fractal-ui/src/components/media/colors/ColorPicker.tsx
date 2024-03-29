import React, { forwardRef } from 'react';

import { useTheme } from '../../../context';
import { useControllableState } from '../../../hooks/useControllableState';
import { HorizontalLayer, LayerProps } from '../../layout';
import { ColorToggle } from './ColorToggle';
import { getColorAccessibilityProps } from './accessibility/getColorAccessibilityProps';

export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: string[];
    onColorChange: (color: string) => void;
    defaultValue?: string;
    value?: string;
}

const ColorPicker = forwardRef(({ colors, onColorChange, defaultValue, value, ...others }: ColorPickerProps, ref: any): JSX.Element => {
    const finalDefaultValue = defaultValue || colors[0];
    const [activeColor, setActiveColor] = useControllableState(value, finalDefaultValue, onColorChange);
    const { spacings } = useTheme();

    const handleColorChange = (_active: boolean, color: string) => setActiveColor(color);

    const renderColorToggle = (color: string) => (
        <ColorToggle
            backgroundColor={color}
            key={color}
            onActiveChange={handleColorChange}
            active={activeColor === color}
            margin={spacings.xs}
            {...getColorAccessibilityProps(activeColor === color)}
        />
    );

    return (
        <HorizontalLayer ref={ref} justifyContent='space-around' flexWrap='wrap' {...others}>
            {colors.map(renderColorToggle)}
        </HorizontalLayer>
    );
});

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };
