import React from 'react';
import { useTheme, Text, TableContainer, DetailsRow, SimpleRow } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';
const detailsCardContent = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];
export function DetailsListFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, Object.assign({ variant: 'title' }, getTitleTextAccessibilityProps(1)), "Details List Example"),
        React.createElement(TableContainer, { label: '2', title: 'Title', titleColorVariant: 'warning', labelColorVariant: 'warning', marginTop: spacings.s, marginBottom: spacings.xl },
            detailsCardContent.map((item) => {
                return React.createElement(DetailsRow, { key: item[0], title: item[0], details: item[1], addSeparator: true });
            }),
            React.createElement(SimpleRow, { title: 'Titleeeeeeeeeeee' }))));
}
//# sourceMappingURL=DetailsListFragment.js.map