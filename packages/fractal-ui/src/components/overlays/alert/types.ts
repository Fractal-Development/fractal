export interface AlertButton {
    text?: string | undefined;
    onPress?: () => void;
    style?: 'default' | 'cancel' | 'destructive';
}
