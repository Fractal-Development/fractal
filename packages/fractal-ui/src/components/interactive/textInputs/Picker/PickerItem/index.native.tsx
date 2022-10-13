import { Picker } from '@react-native-picker/picker';
import React from 'react';

import { PickerItemProps } from './types';

export function PickerItem(props: PickerItemProps): JSX.Element {
    return <Picker.Item {...props} />;
}
