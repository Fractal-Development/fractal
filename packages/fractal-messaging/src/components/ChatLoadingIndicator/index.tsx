import React from 'react';
import { Layer, LayerProps } from '@bma98/fractal-ui';
import { loadingCircleTransition, loadingCircleVariants } from './config';

const bulletStyle = {
    backgroundColor: '#999999',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2
};

interface ChatLoadingIndicatorProps extends LayerProps {
    show: boolean;
}

export function ChatLoadingIndicator({ show, ...layerProps }: ChatLoadingIndicatorProps): JSX.Element | null {
    return show ? (
        <Layer height={40} width={60} justifyContent={'center'} {...layerProps}>
            <Layer
                backgroundColor={'#ffffff'}
                padding={8}
                borderRadius={20}
                flexDirection={'row'}
                from={loadingCircleVariants.start}
                animate={loadingCircleVariants.end}
                exit={loadingCircleVariants.start}
            >
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={loadingCircleTransition}
                />
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={{
                        ...loadingCircleTransition,
                        delay: 0.3
                    }}
                />
                <Layer
                    style={bulletStyle}
                    from={loadingCircleVariants.start}
                    animate={loadingCircleVariants.end}
                    transition={{
                        ...loadingCircleTransition,
                        delay: 0.6
                    }}
                />
            </Layer>
        </Layer>
    ) : null;
}
