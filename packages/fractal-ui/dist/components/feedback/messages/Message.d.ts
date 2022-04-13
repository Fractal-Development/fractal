import React from 'react';
import { LayerProps } from '../../layout';
export interface MessageProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    messageType?: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    icon?: (color: string) => JSX.Element;
    description: string;
}
declare const Message: React.ForwardRefExoticComponent<Pick<MessageProps, keyof MessageProps> & React.RefAttributes<unknown>>;
export { Message };
