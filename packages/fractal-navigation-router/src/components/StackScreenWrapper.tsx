import React, { ReactElement, ReactNode } from 'react';
import { NavigationBar, NavigationBarProps } from '@fractal/fractal-navigation';
import { Layer, useTheme } from '@fractal/fractal-ui';
import { useNavigate } from '../router';

interface StackScreenWrapperProps {
    children: ReactNode;
    navBarProps?: Partial<NavigationBarProps>;
}

/* 
    PageTransitions Examples
// one
    from={{ opacity: 0, x: 600 } as any} 
    animate={{ opacity: 1, x: 0 } as any}
    exit={{ opacity: 0, x: -600 } as any} 
    transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}


// two suggested
    from={{ opacity: 0, x: -200, y: 0 } as any}
    animate={{ opacity: 1, x: 0, y: 0 } as any}
    exit={{ opacity: 0, x: 0, y: -100 } as any}
    transition={{ type: 'linear' }}
                
// three        
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1 }}
    exit={{ scaleY: 0 }}
    transition={{ duration: 0.5 }}

// four
    from={{ width: 0 } as any}
    animate={{ width: '100%' } as any}
    exit={{ x: '100%', opacity: 0 } as any}
    transition={{ duration: 2, type: 'spring', stiffness: 100 }}

*/

export function StackScreenWrapper({ navBarProps, children }: StackScreenWrapperProps): ReactElement {
    const { colors } = useTheme();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    return (
        <>
            <NavigationBar
                goBack={goBack}
                from={{ opacity: 0, x: -200, y: 0 } as any}
                animate={{ opacity: 1, x: 0, y: 0 } as any}
                exit={{ opacity: 0, x: 0, y: -100 } as any}
                transition={{ type: 'linear' }}
                {...navBarProps}
            />
            <Layer
                from={{ opacity: 0, x: -200, y: 0 } as any}
                animate={{ opacity: 1, x: 0, y: 0 } as any}
                exit={{ opacity: 0, x: 0, y: -100 } as any}
                transition={{ type: 'linear' }}
                backgroundColor={colors.background}
                flexGrow={1}
                flexBasis={1}
            >
                {children}
            </Layer>
        </>
    );
}

/*
from={{ opacity: 0, translateX: -200, translateY: 0 }}
                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                exit={{ opacity: 0, translateX: 0, translateY: -100 }}
*/
