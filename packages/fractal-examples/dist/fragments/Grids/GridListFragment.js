import React from 'react';
import { useTheme, Box, Text, GridList } from '@bma98/fractal-ui';
export function GridListFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Grid List Example"),
        React.createElement(GridList, { data: ['One', 'Two', 'Three', 'Four'], numColumns: 2, backgroundColor: colors.warningInteractiveColor, marginTop: spacings.s, marginBottom: spacings.xl, renderItem: () => React.createElement(Box, { margin: 4, height: 60, minWidth: 30 }) })));
}
//# sourceMappingURL=GridListFragment.js.map