import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const NavigationRouter: React.FC = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;
