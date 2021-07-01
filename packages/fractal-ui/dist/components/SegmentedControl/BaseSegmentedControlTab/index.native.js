import React from 'react';
import { Layer } from '../../containers/Layer';
import { TouchableOpacity } from '../../buttons/TouchableOpacity';
import { Text } from '../../text';
import { useTheme } from '../../../context/hooks/useTheme';
export function BaseSegmentedControlTab({ onSelect, value, fontFamily, fontSize, color, fontWeight, fontStyle }) {
    const { borderRadius } = useTheme();
    return (React.createElement(TouchableOpacity, { onPress: onSelect, flex: 1, borderRadius: borderRadius.xs },
        React.createElement(Layer, { flex: 1, justifyContent: 'center', alignItems: 'center', margin: 2, borderRadius: borderRadius.xs },
            React.createElement(Text, { variant: 'normal', fontFamily: fontFamily, fontSize: fontSize, color: color, fontWeight: fontWeight, fontStyle: fontStyle }, value))));
}
//# sourceMappingURL=index.native.js.map