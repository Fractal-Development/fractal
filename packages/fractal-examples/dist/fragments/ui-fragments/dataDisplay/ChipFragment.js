import React from 'react';
import { useTheme, Chip, Layer, FileIcon } from '@bma98/fractal-ui';
const onPress = () => console.log('Cross button pressed');
export function ChipFragment() {
    const { colors, spacings } = useTheme();
    return (React.createElement(Layer, { flexDirection: "row", marginTop: spacings.s, marginBottom: spacings.xl },
        React.createElement(Chip, { text: "Ver reportes", marginRight: spacings.s, onCrossButtonPress: onPress }),
        React.createElement(Chip, { onCrossButtonPress: onPress },
            React.createElement(FileIcon, { height: 24, width: 24, fill: colors.text }))));
}
//# sourceMappingURL=ChipFragment.js.map