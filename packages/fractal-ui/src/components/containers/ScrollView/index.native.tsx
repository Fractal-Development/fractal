import React from 'react';
import { ScrollView as NativeScrollView } from 'react-native';
import { ScrollViewProps } from './types';

export function ScrollView(props: ScrollViewProps): JSX.Element {
    return <NativeScrollView {...props} />;
}
