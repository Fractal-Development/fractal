import { ReactNode } from 'react';
import { LayerProps } from '../../layout';
interface OptionsMenuButtonProps {
    customIcon?: (color: string) => ReactNode;
    options: Array<string>;
    onOptionPress?: (option: string) => void;
    usePortal?: boolean;
    menuContainerProps?: Omit<LayerProps, 'children'>;
    children?: (anchorRef: any, showOptions: () => void) => ReactNode | Array<ReactNode>;
}
export declare function PopoverOptionsMenuButton({ options, onOptionPress, customIcon, menuContainerProps, children, usePortal }: OptionsMenuButtonProps): JSX.Element;
export {};
