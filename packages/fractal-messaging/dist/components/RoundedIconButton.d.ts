export interface RoundedIconButtonProps {
    iconName: 'star' | 'upload';
    color: string;
    onPress?: () => void;
}
export declare function RoundedIconButton({ iconName, color, onPress }: RoundedIconButtonProps): JSX.Element;
