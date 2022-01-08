import React from 'react';
import { useTheme, Box, Text, Grid, GridColumn, GridRow } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';
export function GridFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: "title" }, getTitleTextAccessibilityProps(1)), "Grid Fragment"),
        React.createElement(Box, { height: 300, marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Grid, null,
                React.createElement(GridColumn, { backgroundColor: colors.dangerInteractiveColor300 }),
                React.createElement(GridColumn, null,
                    React.createElement(GridRow, { backgroundColor: colors.warningInteractiveColor300 }),
                    React.createElement(GridRow, { backgroundColor: colors.mainInteractiveColor300 }))))));
}
//# sourceMappingURL=GridFragment.js.map