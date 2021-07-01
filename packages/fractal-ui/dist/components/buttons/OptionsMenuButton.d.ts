import { ReactNode } from 'react';
interface OptionsMenuButtonProps {
    customIcon?: (color: string) => ReactNode;
    options: Array<string>;
    onOptionPress: (option: string) => void;
}
export declare function OptionsMenuButton({ options, onOptionPress, customIcon }: OptionsMenuButtonProps): JSX.Element;
export {};
