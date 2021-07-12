import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
export function ModalPortal({ children }) {
    const [element, setElement] = useState(null);
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
//# sourceMappingURL=ModalPortal.js.map