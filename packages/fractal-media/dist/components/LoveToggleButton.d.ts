export interface LoveToggleButtonProps {
    onPress?: () => void;
    size?: number;
    checked?: boolean;
    checkedColor?: string;
    uncheckedColor?: string;
}
export declare function LoveToggleButton({ size, onPress, checked, checkedColor: checkedColorProp, uncheckedColor: uncheckedColorProp }: LoveToggleButtonProps): JSX.Element;
