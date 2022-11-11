/// <reference types="react" />
interface Config {
    [key: string]: string;
}
interface Props {
    children: JSX.Element;
    firebaseConfig: Config;
    loadingComponent: JSX.Element;
}
export declare function FirebaseInit(props: Props): JSX.Element;
export {};
