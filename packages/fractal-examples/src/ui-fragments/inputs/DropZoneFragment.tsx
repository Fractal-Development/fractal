import React from 'react';
import { useTheme, Box, Dropzone, Layer, Text } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function DropZoneFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Dropzone Fragment
            </Text>
            <Layer marginTop={spacings.s} marginBottom={spacings.xl}>
                <Box marginBottom={spacings.s}>
                    <Dropzone onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)} />
                </Box>
                <Box marginTop={spacings.s}>
                    <Dropzone
                        text={'Dropzone pick multiple files '}
                        webTextButton={'to explore'}
                        pickMultipleFiles
                        onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                    />
                </Box>
                <Box marginTop={spacings.s}>
                    <Dropzone
                        text={'Dropzone with maximum number of files (5) '}
                        webTextButton={'to explore'}
                        pickMultipleFiles
                        maxNumberFiles={5}
                        onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                    />
                </Box>
                <Box marginTop={spacings.s}>
                    <Dropzone
                        text={'Dropzone with maximum number of file sizes (100 kB) '}
                        webTextButton={'to explore'}
                        pickMultipleFiles
                        maxFileSize={100000}
                        onChangeAcceptedFiles={(files) => console.log('Accepted files: ', files)}
                    />
                </Box>
            </Layer>
        </>
    );
}
