import { createContext } from 'react';

export interface ToastOptions {
    duration?: number;
}

export type ToastContextType = (message: string, options?: ToastOptions) => void;

export const ToastContext = createContext<ToastContextType>(() => {});
