import React from 'react';
import { Message } from './Message';
import { BugIcon } from '../../../assets';
import { Layer, LayerProps } from '../../layout';

interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}

interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}

export class ErrorMessage extends React.Component<ErrorMessageProps, State> {
    constructor(props: ErrorMessageProps) {
        super(props);
        this.state = { hasError: false, errorMessage: '', errorTitle: '' };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, errorMessage: error.message, errorTitle: error.name };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        const { onError } = this.props;
        if (onError) onError(error, info.componentStack);
    }

    renderErrorIcon = (color: string): JSX.Element => <BugIcon width={20} fill={color} />;

    render(): React.ReactNode {
        const { hasError, errorTitle, errorMessage } = this.state;

        if (hasError) {
            return (
                <Message messageType='danger' title={errorTitle} description={errorMessage} icon={this.renderErrorIcon} {...this.props} />
            );
        }

        return <Layer {...this.props} />;
    }
}
