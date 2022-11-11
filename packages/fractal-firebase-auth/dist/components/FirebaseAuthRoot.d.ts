/// <reference types="react" />
import { AuthenticateProps } from './Authenticate';
import { MinimalUserData } from '../types';
export declare function FirebaseAuthRoot<UserType extends MinimalUserData>(props: AuthenticateProps<UserType>): JSX.Element;
