import React, { Dispatch, ReactNode, SetStateAction } from 'react';
export declare type UserDocumentContextType = [unknown, Dispatch<SetStateAction<unknown>>];
export declare const UserDocumentContext: React.Context<UserDocumentContextType>;
interface UserDocumentProviderProps {
    children: ReactNode;
}
export declare function UserDocumentProvider({ children }: UserDocumentProviderProps): JSX.Element;
export {};
