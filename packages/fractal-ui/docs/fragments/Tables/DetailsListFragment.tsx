import React from 'react';
import { useTheme, Text, TableContainer, DetailsRow, SimpleRow } from '../../../src';

const detailsCardContent: Array<[string, string]> = [
    ['Title 1', 'Details 1'],
    ['Title 2', 'Details 2']
];

export function DetailsListFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Details List Example</Text>
            <TableContainer
                label='2'
                title='Title'
                titleColorVariant='warning'
                labelColorVariant='warning'
                marginTop={spacings.s}
                marginBottom={spacings.xl}
            >
                {detailsCardContent.map((item) => {
                    return <DetailsRow key={item[0]} title={item[0]} details={item[1]} addSeparator />;
                })}
                <SimpleRow title={'Titleeeeeeeeeeee'} />
            </TableContainer>
        </>
    );
}
