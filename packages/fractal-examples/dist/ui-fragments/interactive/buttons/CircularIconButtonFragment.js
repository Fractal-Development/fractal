import React from 'react';
import { useTheme, Box, CircularIconButton, Text, LoadIcon, UploadIcon, ChevronDownIcon, ThreeDotsHorizontalIcon, SearchIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function CircularIconButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Circular Icon Button Fragment"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s }, (color) => React.createElement(UploadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(UploadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(UploadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(UploadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(ChevronDownIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'warning', marginBottom: spacings.s }, (color) => React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'warning', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'warning', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'warning', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(ThreeDotsHorizontalIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'success', marginBottom: spacings.s }, (color) => React.createElement(SearchIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'success', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(SearchIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'success', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(SearchIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'success', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(SearchIcon, { height: 24, width: 24, fill: color })))));
}
//# sourceMappingURL=CircularIconButtonFragment.js.map