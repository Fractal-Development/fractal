import { useCallback } from 'react';
import Toast from 'react-native-root-toast';
import { useTheme } from '../../../../context/hooks/useTheme';
import { ToastContextType } from '../../../../context/ToastContext';

export function useToast(): ToastContextType {
    const { colors } = useTheme();

    return useCallback<ToastContextType>(
        (message, options) => {
            Toast.show(message, {
                duration: options?.duration,
                backgroundColor: colors.foreground,
                textColor: colors.text
            });
        },
        [colors.foreground, colors.text]
    );
}
