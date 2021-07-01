import React, { forwardRef } from 'react';
import { useTheme } from '../../context/hooks/useTheme';
import { HorizontalLayer } from '../containers/HorizontalLayer';
import { LayerProps } from '../containers/Layer/types';
import { ColorToggle } from './ColorToggle';
import { useControllableState } from '../../hooks/useControllableState';
import { getColorAccessibilityProps } from './accessibility/getColorAccessibilityProps';

export interface ColorPickerProps extends Partial<Omit<LayerProps, 'children'>> {
    colors: Array<string>;
    onColorChange: (color: string) => void;
    defaultValue?: string;
    value?: string;
}

const ColorPicker = forwardRef(({ colors, onColorChange, defaultValue, value, ...others }: ColorPickerProps, ref: any): JSX.Element => {
    const finalDefaultValue = defaultValue ? defaultValue : colors[0];
    const [activeColor, setActiveColor] = useControllableState(value, finalDefaultValue, onColorChange);
    const { spacings } = useTheme();

    const handleColorChange = (_active: boolean, color: string) => setActiveColor(color);

    const renderColorToggle = (color: string) => {
        return (
            <ColorToggle
                backgroundColor={color}
                key={color}
                onActiveChange={handleColorChange}
                active={activeColor === color}
                margin={spacings.xs}
                {...getColorAccessibilityProps(activeColor === color, activeColor)}
            />
        );
    };

    return (
        <HorizontalLayer ref={ref} justifyContent={'space-around'} flexWrap={'wrap'} {...others}>
            {colors.map(renderColorToggle)}
        </HorizontalLayer>
    );
});

ColorPicker.displayName = 'ColorPicker';

export { ColorPicker };
