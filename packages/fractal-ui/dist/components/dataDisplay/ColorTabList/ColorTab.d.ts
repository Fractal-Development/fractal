import { ReactElement } from 'react';
export interface ColorTabProps {
    tabColor: string;
    text: string;
}
interface InternalColorTabProps extends ColorTabProps {
    active: boolean;
    index: number;
    onPress: (index: number) => void;
}
export declare function ColorTab({ tabColor, text, active, onPress, index }: InternalColorTabProps): ReactElement;
export {};
