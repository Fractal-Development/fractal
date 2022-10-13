import React from 'react';

import { BugIcon } from '../../../assets/BugIcon';
import { Message, MessageProps } from './Message';

type ErrorMessageProps = Omit<MessageProps, 'messageType' | 'icon'>;

export function ErrorMessage(props: ErrorMessageProps): JSX.Element {
    const renderErrorIcon = (color: string): JSX.Element => <BugIcon width={20} fill={color} />;

    return <Message messageType='danger' icon={renderErrorIcon} {...props} />;
}
