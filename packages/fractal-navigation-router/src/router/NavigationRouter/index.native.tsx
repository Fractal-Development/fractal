import React from 'react';
import { BackButton, NativeRouter } from 'react-router-native';

export const NavigationRouter: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => (
    <NativeRouter>
        <BackButton>{children}</BackButton>
    </NativeRouter>
);
