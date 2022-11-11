import { ReactNode } from 'react';
export interface CreateUserScreenProps {
    createUser: (id: string, email: string) => void;
    children?: ReactNode;
}
export declare function CreateUserScreen({ createUser, children }: CreateUserScreenProps): JSX.Element;
