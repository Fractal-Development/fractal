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
import React, { useCallback, useEffect, useState } from 'react';
import { PickerButton } from '../PickerButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '../../../context/hooks/useTheme';
import { BlurrediOSModal } from '../../modals';
import { useControllableState } from '../../../hooks/useControllableState';
export function DatePicker(_a) {
    var { value, initialDate = new Date(), mode = 'date', minDate, maxDate, onChange, iosDoneText = 'Done' } = _a, others = __rest(_a, ["value", "initialDate", "mode", "minDate", "maxDate", "onChange", "iosDoneText"]);
    initialDate.setSeconds(0);
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useControllableState(value, initialDate, onChange);
    const { colors } = useTheme();
    const [textColor, setTextColor] = useState('black');
    const toggleModal = () => setModalActive((current) => !current);
    const onPickerValueChange = useCallback((_, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    }, [date, setDate]);
    useEffect(() => {
        // Further info on the bug: https://github.com/react-native-datetimepicker/datetimepicker/issues/308
        // This is really not performant so check constanly if the bug is fixed.
        if (modalActive) {
            setTimeout(() => {
                setTextColor(colors.text);
            }, 100);
        }
        else {
            setTextColor('black');
        }
    }, [modalActive, colors]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, Object.assign({ value: mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString(), onPress: toggleModal }, others)),
        React.createElement(BlurrediOSModal, { dismissText: iosDoneText, visible: modalActive, onDismiss: toggleModal },
            React.createElement(DateTimePicker, { value: date, mode: mode, display: 'spinner', is24Hour: true, minimumDate: minDate, maximumDate: maxDate, onChange: onPickerValueChange, textColor: textColor }))));
}
//# sourceMappingURL=index.ios.js.map