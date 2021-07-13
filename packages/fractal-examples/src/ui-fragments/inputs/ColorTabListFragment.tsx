import React from 'react';
import { useTheme, ColorTabList, Layer, Text } from '@bma98/fractal-ui';
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
                        { tabColor: colors.contentInteractiveColor, text: 'Tab 1' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 2' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 3' }
                    ]}
                >
                    {() => <Text variant={'normal'}>Tab Content</Text>}
                </ColorTabList>
            </Layer>
        </>
    );
}
