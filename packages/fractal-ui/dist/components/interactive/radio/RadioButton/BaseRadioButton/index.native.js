import React from 'react';
import { HorizontalLayer } from '../../../../layout';
import { TouchableOpacity } from '../../../buttons';
import { RadioControl } from '../RadioControl';
export function BaseRadioButton({ label, onPress, active }) {
    return (React.createElement(TouchableOpacity, { onPress: onPress },
        React.createElement(HorizontalLayer, { alignItems: 'center' },
            React.createElement(RadioControl, { active: active, label: label }))));
}
//# sourceMappingURL=index.native.js.map