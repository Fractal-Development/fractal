import React from 'react';
import { Message } from './Message';
import { BugIcon } from '../../../assets/BugIcon';
export function ErrorMessage(props) {
    const renderErrorIcon = (color) => React.createElement(BugIcon, { width: 20, fill: color });
    return React.createElement(Message, Object.assign({ messageType: 'danger', icon: renderErrorIcon }, props));
}
//# sourceMappingURL=ErrorMessage.js.map