import React from 'react';
import { NativeRouter } from 'react-router-native';
import { enableFreeze } from 'react-native-screens';

enableFreeze(true);

export const NavigationRouter: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => <NativeRouter>{children}</NativeRouter>;
