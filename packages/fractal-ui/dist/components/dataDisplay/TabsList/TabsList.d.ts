import { ReactElement } from 'react';
import { LayerProps } from '../../containers';
interface ColorTabProps {
    backgroundColor: string;
    textColor: string;
    text: string;
}
interface InternalColorTabProps extends ColorTabProps {
    active?: boolean;
    index?: number;
    onPress: (index?: number) => void;
}
export declare function ColorTab({ backgroundColor, text, active, textColor, onPress, index }: InternalColorTabProps): ReactElement;
export interface TabListProps extends LayerProps {
    tabs?: Array<ColorTabProps>;
    children: (index: number) => ReactElement;
    onPress: (index?: number) => void;
}
export declare function ColorTabList({ children, tabs, onPress, ...others }: TabListProps): ReactElement;
export {};
