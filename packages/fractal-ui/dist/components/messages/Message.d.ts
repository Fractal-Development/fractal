import React from 'react';
import { LayerProps } from '../containers/Layer/types';
export interface MessageProps extends Partial<Omit<LayerProps, 'children'>> {
    title: string;
    messageType?: 'main' | 'alternative' | 'success' | 'warning' | 'danger';
    icon?: (color: string) => JSX.Element;
    description: string;
}
declare const Message: React.ForwardRefExoticComponent<MessageProps & React.RefAttributes<unknown>>;
export { Message };
