import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const NavigationRouter: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
