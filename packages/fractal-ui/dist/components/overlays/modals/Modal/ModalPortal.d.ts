import { ReactNode, ReactPortal } from 'react';
export interface ModalPortalProps {
    children?: ReactNode;
}
export declare function ModalPortal({ children }: ModalPortalProps): ReactPortal | null;
