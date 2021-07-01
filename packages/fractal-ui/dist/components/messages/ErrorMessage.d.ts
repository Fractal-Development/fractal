import * as React from 'react';
import { LayerProps } from '../containers/Layer/types';
interface State {
    hasError: boolean;
    errorMessage: string;
    errorTitle: string;
}
interface ErrorMessageProps extends LayerProps {
    onError?: (error: Error, componentStack: string) => void;
}
export declare class ErrorMessage extends React.Component<ErrorMessageProps, State> {
    constructor(props: ErrorMessageProps);
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    renderErrorIcon: (color: string) => JSX.Element;
    render(): React.ReactNode;
}
export {};
