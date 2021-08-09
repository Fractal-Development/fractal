import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { ScreenStackProps as Props } from 'react-native-screens';

export interface ScreenStackProps extends Props {
    children?: ReactNode;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    return <View {...props} />;
}
