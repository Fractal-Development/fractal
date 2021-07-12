import { ReactNode, ReactPortal, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export interface ModalPortalProps {
    children?: ReactNode;
}

export function ModalPortal({ children }: ModalPortalProps): ReactPortal | null {
    const [element, setElement] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = document.createElement('div');

        if (element && document.body) {
            document.body.appendChild(element);
            setElement(element);
        }

        return () => {
            if (element && document.body) {
                document.body.removeChild(element);
                setElement(null);
            }
        };
    }, []);

    return element && ReactDOM.createPortal(children, element);
}
