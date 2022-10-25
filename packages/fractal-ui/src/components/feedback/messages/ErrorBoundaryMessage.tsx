import React from 'react';

import { Layer, LayerProps } from '../../layout';
import { ErrorMessage } from './ErrorMessage';

interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}

interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}

export class ErrorBoundaryMessage extends React.Component<ErrorMessageProps, State> {
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

    render(): React.ReactNode {
        const { hasError, errorTitle, errorMessage } = this.state;
        const { onError, ...layerProps } = this.props;

        if (hasError) {
            return <ErrorMessage title={errorTitle} description={errorMessage} {...layerProps} />;
        }

        return <Layer {...layerProps} />;
    }
}
