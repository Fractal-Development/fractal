import React from 'react';
import { useTheme, Chip, Layer } from '@bma98/fractal-ui';
const onPress = () => console.log('Cross button pressed');
export function ChipFragment() {
    const { spacings } = useTheme();
    return (React.createElement(Layer, { flexDirection: 'row', marginTop: spacings.s, marginBottom: spacings.xl },
        React.createElement(Chip, { text: 'Ver reportes', onCrossButtonPress: onPress })));
}
//# sourceMappingURL=ChipFragment.js.map