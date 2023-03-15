import { Alert } from 'react-native';
import { AlertButton } from './types';

export function useAlert(): (title: string, message?: string, buttons?: AlertButton[]) => void {
    return (title: string, message?: string, buttons?: AlertButton[]) => {
        Alert.alert(title, message, buttons);
    };
}
