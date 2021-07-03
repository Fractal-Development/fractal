import React from 'react';
import { useTheme, Box, CircularIconButton, Text, LoadIcon, ThreeDotsHorizontalIcon, SearchIcon } from '@bma98/fractal-ui';
export function CircularIconButtonFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Circular Icon Button Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'main', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'alternative', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, reduceColor: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
            React.createElement(CircularIconButton, { variant: 'danger', marginBottom: spacings.s, reduceColor: true, disabled: true }, (color) => React.createElement(LoadIcon, { height: 24, width: 24, fill: color })),
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