import React from 'react';
import { HorizontalLayer } from '../../../containers/HorizontalLayer';
import { TouchableOpacity } from '../../../buttons/TouchableOpacity';
import { RadioControl } from '../RadioControl';
export function BaseRadioButton({ label, onPress, active }) {
    return (React.createElement(TouchableOpacity, { onPress: onPress },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(RadioControl, { active: active, label: label }))));
}
//# sourceMappingURL=index.native.js.map