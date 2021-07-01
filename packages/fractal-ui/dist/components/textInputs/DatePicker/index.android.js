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
import DateTimePicker from '@react-native-community/datetimepicker';
import { useControllableState } from '../../../hooks/useControllableState';
export function DatePicker(_a) {
    var { value, initialDate = new Date(), mode = 'date', minDate, maxDate, onChange } = _a, others = __rest(_a, ["value", "initialDate", "mode", "minDate", "maxDate", "onChange"]);
    initialDate.setSeconds(0);
    const [modalActive, setModalActive] = useState(false);
    const [date, setDate] = useControllableState(value, initialDate, onChange);
    const toggleModal = useCallback(() => {
        setModalActive((current) => !current);
    }, [setModalActive]);
    const onPickerValueChange = useCallback((_, selectedDate) => {
        const currentDate = selectedDate || date;
        toggleModal();
        setDate(currentDate);
    }, [date, setDate, toggleModal]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PickerButton, Object.assign({ value: mode === 'date' ? date.toLocaleDateString() : date.toLocaleTimeString(), onPress: toggleModal }, others)),
        modalActive ? (React.createElement(DateTimePicker, { value: date, mode: mode, is24Hour: true, minimumDate: minDate, maximumDate: maxDate, onChange: onPickerValueChange })) : null));
}
//# sourceMappingURL=index.android.js.map