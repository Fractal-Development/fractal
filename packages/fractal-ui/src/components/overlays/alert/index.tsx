import { useContext } from 'react';
import { AlertContext } from '../../../context/AlertContext';
import { AlertButton } from './types';

export function useAlert(): (title: string, message?: string, buttons?: AlertButton[]) => void {
    return useContext(AlertContext);
}
