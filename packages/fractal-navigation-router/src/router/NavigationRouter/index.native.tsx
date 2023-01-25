import React from 'react';
import { NativeRouter } from 'react-router-native';

export const NavigationRouter: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => <NativeRouter>{children}</NativeRouter>;
