import React, { forwardRef } from 'react';
import { useTheme } from '../context/hooks/useTheme';
import { Layer } from './containers';
import { Text } from './text';
const Badge = forwardRef(({ children, variant }, ref) => {
    const { colors, spacings } = useTheme();
    const colorName100 = `${variant}InteractiveColor100`;
    const colorName800 = `${variant}InteractiveColor800`;
    const color = colors[colorName800];
    const backgroundColor = colors[colorName100];
    return (React.createElement(Layer, { ref: ref, backgroundColor: backgroundColor, alignSelf: 'flex-start', padding: spacings.xs / 2, borderRadius: spacings.xs / 2 },
        React.createElement(Text, { variant: 'normal', color: color, fontWeight: 'bold' }, children)));
});
Badge.displayName = 'Badge';
export { Badge };
//# sourceMappingURL=Badge.js.map