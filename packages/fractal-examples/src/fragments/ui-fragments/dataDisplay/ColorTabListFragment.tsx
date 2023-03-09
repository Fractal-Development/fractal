import { useTheme, ColorTabList, Layer, Text } from '@fractal/fractal-ui';
import React from 'react';

import { getTitleTextAccessibilityProps } from '../accessibility/getTitleTextAccessibilityProps';

export function ColorTabListFragment(): JSX.Element {
    const { colors, spacings } = useTheme();
    const black = '#000000';

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Color Tab List Fragment
            </Text>
            <Layer flexDirection='row' marginTop={spacings.s} marginBottom={spacings.xl}>
                <ColorTabList
                    tabs={[
                        { tabColor: black, text: 'Tab 1' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 2' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 3' },
                        { tabColor: black, text: 'Tab 4' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 5' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 6' },
                        { tabColor: black, text: 'Tab 7' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 8' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 9' },
                        { tabColor: black, text: 'Tab 10' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 11' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 12' },
                        { tabColor: black, text: 'Tab 13' },
                        { tabColor: colors.mainInteractiveColor, text: 'Tab 14' },
                        { tabColor: colors.successInteractiveColor, text: 'Tab 15' }
                    ]}
                    onItemPress={(index) => console.log(index)}
                    width='100%'
                >
                    {() => <Text variant='normal'>Tab Content</Text>}
                </ColorTabList>
            </Layer>
        </>
    );
}
