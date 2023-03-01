import React, { createContext, ReactNode, useState } from 'react';
import { AlertModal } from '../components/overlays/alert/AlertModal';
import { AlertButton } from '../components/overlays/alert/types';

export type AlertContextValue = (title: string, message?: string, buttons?: AlertButton[]) => void;

export const AlertContext = createContext<AlertContextValue>(() => {});

export interface AlertProviderProps {
    children: ReactNode | ReactNode[];
}

export function AlertProvider({ children }: AlertProviderProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const [alertData, setAlertData] = useState<{
        title: string;
        message?: string;
        buttons?: AlertButton[];
    }>();

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const alert = (title: string, message?: string, buttons?: AlertButton[]) => {
        setAlertData({ title, message, buttons });
        onOpen();
    };

    return (
        <AlertContext.Provider value={alert}>
            {children}
            <AlertModal visible={isOpen} onDismiss={onClose} {...alertData} />
        </AlertContext.Provider>
    );
}
