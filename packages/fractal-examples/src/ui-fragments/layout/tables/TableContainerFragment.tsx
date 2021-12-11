import React from 'react';
import { useTheme, Text, TableContainer, DetailsRow, SimpleRow } from '@bma98/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

export function TableContainerFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant="title" {...getTitleTextAccessibilityProps(1)}>
                Table Container Fragment
            </Text>
            <TableContainer
                label='2'
                title='Title'
                titleColorVariant='warning'
                labelColorVariant='warning'
                marginTop={spacings.s}
                marginBottom={spacings.xl}
            >
                {detailsCardContent.map((item) => <DetailsRow key={item[0]} title={item[0]} details={item[1]} addSeparator />)}
                <SimpleRow title="Titleeeeeeeeeeee" />
            </TableContainer>
        </>
    );
}
