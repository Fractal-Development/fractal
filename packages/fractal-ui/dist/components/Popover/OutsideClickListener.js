import React, { useRef, useEffect, useCallback } from 'react';
import { Layer } from '../containers/Layer';
export function OutsideClickListener({ children, onOutsideClick }) {
    const wrapperRef = useRef(null);
    const handleOutsideClick = useCallback((event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onOutsideClick();
        }
    }, [onOutsideClick]);
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [handleOutsideClick]);
    return React.createElement(Layer, { ref: wrapperRef }, children);
}
//# sourceMappingURL=OutsideClickListener.js.map