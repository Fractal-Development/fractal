import React from 'react';
import { BackButton, NativeRouter } from 'react-router-native';

export const NavigationRouter: React.FC = ({ children }) => (
    <NativeRouter>
        <BackButton>{children}</BackButton>
    </NativeRouter>
);
