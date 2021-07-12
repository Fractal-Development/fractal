import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { PickerItemProps } from './types';

export function PickerItem(props: PickerItemProps): JSX.Element {
    return <Picker.Item {...props} />;
}
