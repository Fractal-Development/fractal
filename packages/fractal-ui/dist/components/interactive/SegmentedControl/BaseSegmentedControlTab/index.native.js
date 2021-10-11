import React from 'react';
import { Layer } from '../../../layout';
import { TouchableOpacity } from '../../buttons';
import { Text } from '../../../text';
import { useTheme } from '../../../../context';
export function BaseSegmentedControlTab({ onSelect, value, fontFamily, fontSize, color, fontWeight, fontStyle }) {
    const { borderRadius } = useTheme();
    return (React.createElement(TouchableOpacity, { onPress: onSelect, flex: 1, borderRadius: borderRadius.xs },
        React.createElement(Layer, { flex: 1, justifyContent: "center", alignItems: "center", margin: 2, borderRadius: borderRadius.xs },
            React.createElement(Text, { variant: "normal", fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: fontWeight, fontStyle: fontStyle }, value))));
}
//# sourceMappingURL=index.native.js.map