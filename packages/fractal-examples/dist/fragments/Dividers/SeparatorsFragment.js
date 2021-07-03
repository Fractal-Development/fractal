import React from 'react';
import { useTheme, Box, Separator, Text } from '@bma98/fractal-ui';
export function SeparatorsFragment() {
    const { spacings } = useTheme();
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { variant: 'title' }, "Separator Example"),
        React.createElement(Box, { marginTop: spacings.s, marginBottom: spacings.xl },
            React.createElement(Text, { variant: 'normal', marginBottom: spacings.s }, "Below is the separator that is more visible with the isAtBackgroundLevel variable"),
            React.createElement(Separator, { isAtBackgroundLevel: true, marginBottom: spacings.s }),
            React.createElement(Text, { variant: 'normal', marginBottom: spacings.s }, "Below is the separator that is less visible without the isAtBackgroundLevel variable"),
            React.createElement(Separator, { marginBottom: spacings.s }),
            React.createElement(Text, { variant: 'normal' }, "Some text."))));
}
//# sourceMappingURL=SeparatorsFragment.js.map