import React from 'react';
import { useTheme, ColorTabList, Layer, Text, FileIcon } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ColorTabListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();

    return (
        <>
            <Text variant={'title'} {...getTitleTextAccessibilityProps(1)}>
                Color Tab List Fragment
            </Text>
            <Layer flexDirection={'row'} marginTop={spacings.s} marginBottom={spacings.xl}>
                <ColorTabList
                    tabs={[
                        { tabColor: colors.alternativeInteractiveColor, text: 'Tab 1' },
                        { tabColor: colors.contentInteractiveColor, text: 'Tab 2' },
                        { tabColor: colors.dangerInteractiveColor, text: 'Tab 3' }
                    ]}
                >
                    {() => <FileIcon height={24} width={24} fill={colors.text} />}
                </ColorTabList>
            </Layer>
        </>
    );
}
