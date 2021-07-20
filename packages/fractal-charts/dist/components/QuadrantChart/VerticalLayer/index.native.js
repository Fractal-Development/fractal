import React from 'react';
import { View } from 'react-native';
export function VerticalLayer({ children }) {
    return (React.createElement(View, { style: {
            width: 130,
            height: 24,
            position: 'absolute',
            transform: [{ rotate: '-90deg' }, { translateY: -53 }, { translateX: -53 }]
        } }, children));
}
//# sourceMappingURL=index.native.js.map