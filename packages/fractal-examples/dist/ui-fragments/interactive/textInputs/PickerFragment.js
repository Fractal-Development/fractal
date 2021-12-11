import React from 'react';
import { useTheme, Box, Picker, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function PickerFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Picker Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Picker, { onChange: (value) => console.log(value), iosDoneText: 'Done', items: [
                    ['1', 'Hoy'],
                    ['2', 'Ayer'],
                    ['3', 'Prueba'],
                    ['4', 'Cuatro'],
                    ['5', 'Cinco']
                ], defaultValue: "3", marginBottom: spacings.s }),
            React.createElement(Picker, { iosDoneText: 'Done', items: [
                    ['1', 'Hoy'],
                    ['2', 'Ayer'],
                    ['3', 'Prueba ( deshabilitado / disabled )'],
                    ['4', 'Cuatro'],
                    ['5', 'Cinco']
                ], defaultValue: "3", disabled: true }))));
}
//# sourceMappingURL=PickerFragment.js.map