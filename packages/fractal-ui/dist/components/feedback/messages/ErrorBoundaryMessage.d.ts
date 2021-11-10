import React from 'react';
import { LayerProps } from '../../layout';
interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}
interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}
export declare class ErrorBoundaryMessage extends React.Component<ErrorMessageProps, State> {
    constructor(props: ErrorMessageProps);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
