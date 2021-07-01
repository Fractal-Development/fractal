import * as React from 'react';
import { Message } from './Message';
import { BugIcon } from '../../assets/BugIcon';
import { Layer } from '../containers/Layer';
export class ErrorMessage extends React.Component {
    constructor(props) {
        super(props);
        this.renderErrorIcon = (color) => React.createElement(BugIcon, { width: 20, fill: color });
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }
    componentDidCatch(error, info) {
        const { onError } = this.props;
        if (onError)
            onError(error, info.componentStack);
    }
    render() {
        if (this.state.hasError) {
            return (React.createElement(Message, Object.assign({ messageType: 'danger', title: this.state.errorTitle, description: this.state.errorMessage, icon: this.renderErrorIcon }, this.props)));
        }
        return React.createElement(Layer, Object.assign({}, this.props), this.props.children);
    }
}
//# sourceMappingURL=ErrorMessage.js.map