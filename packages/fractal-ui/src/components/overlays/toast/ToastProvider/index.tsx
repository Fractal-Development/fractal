import React, { ReactNode, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { Toast } from '../Toast';
import { TOAST_DURATIONS } from '../toastDurations';
import { ToastContext, ToastOptions } from '../../../../context/ToastContext';
import { Layer } from '../../../layout/Layer';
import { AnimatePresence } from '../../../animation/AnimatePresence';
import { useTheme } from '../../../../context/hooks/useTheme';

function generateUEID() {
    let first: number | string = (Math.random() * 46656) | 0;
    let second: number | string = (Math.random() * 46656) | 0;
    first = `000${first.toString(36)}`.slice(-3);
    second = `000${second.toString(36)}`.slice(-3);

    return `${first}${second}`;
}

interface ToastProviderProps {
    children?: ReactNode | ReactNode[];
}

interface ToastItem {
    id: string;
    message: string;
    duration?: number;
}

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
    const { spacings } = useTheme();
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const open = useCallback(
        (
            message: string,
            options: ToastOptions = {
                duration: TOAST_DURATIONS.SHORT
            }
        ) => {
            setToasts((currentToasts: ToastItem[]) => {
                return [...currentToasts, { id: generateUEID(), message, duration: options.duration }];
            });
        },
        []
    );
    const close = useCallback(
        (id: string) => setToasts((currentToasts: ToastItem[]) => currentToasts.filter((toast: ToastItem) => toast.id !== id)),
        []
    );

    return (
        <ToastContext.Provider value={open}>
            {children}
            {toasts.length > 0
                ? createPortal(
                      <Layer layout overflow='hidden' position='absolute' bottom={12} right={20} minWidth={300} maxWidth={560}>
                          <AnimatePresence>
                              {toasts.map((toast) => {
                                  return (
                                      <Toast
                                          key={toast.id}
                                          message={toast.message}
                                          close={() => close(toast.id)}
                                          duration={toast.duration}
                                          margin={spacings.s}
                                      />
                                  );
                              })}
                          </AnimatePresence>
                      </Layer>,
                      document.body
                  )
                : null}
        </ToastContext.Provider>
    );
}
