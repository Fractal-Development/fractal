import { MessageProps } from './Message';
declare type ErrorMessageProps = Omit<MessageProps, 'messageType' | 'icon'>;
export declare function ErrorMessage(props: ErrorMessageProps): JSX.Element;
export {};
