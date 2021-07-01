var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useCallback, useState } from 'react';
import { PickerButton } from '../PickerButton';
import { usePickerState } from './hooks/usePickerState';
import { useTheme } from '../../../context/hooks/useTheme';
import { PickerItem } from './PickerItem';
import { BasePicker } from './BasePicker';
import { BlurrediOSModal } from '../../modals';
export function Picker(_a) {
    var { items, defaultValue, value, onChange, iosDoneText = 'Done' } = _a, others = __rest(_a, ["items", "defaultValue", "value", "onChange", "iosDoneText"]);
    const [currentValue, handleValueChange, index] = usePickerState(defaultValue, items, value, onChange);
    const [modalActive, setModalActive] = useState(false);
    const { colors } = useTheme();
    const toggleModal = () => setModalActive((current) => !current);
    const renderItem = useCallback((item) => {
        const value = item[0];
        const label = item[1];
        return React.createElement(PickerItem, { color: colors.text, label: label, value: value, key: value });
    }, [colors.text]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, Object.assign({ value: items[index][1], onPress: toggleModal }, others)),
        React.createElement(BlurrediOSModal, { dismissText: iosDoneText, visible: modalActive, onDismiss: toggleModal },
            React.createElement(BasePicker, { selectedValue: currentValue, onValueChange: handleValueChange }, items.map(renderItem)))));
}
//# sourceMappingURL=index.ios.js.map