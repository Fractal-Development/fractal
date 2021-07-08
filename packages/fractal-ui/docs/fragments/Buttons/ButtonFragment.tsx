import React from 'react';
import { useTheme, Box, Button, Text } from '../../../src';

export function ButtonFragment(): JSX.Element {
    const { spacings } = useTheme();

    return (
        <>
            <Text variant={'title'}>Button Example</Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant={'main'} text={'Main'} marginBottom={spacings.s} />
                <Button variant={'main'} text={'Main disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'main'} text={'Main loading'} marginBottom={spacings.s} loading />
                <Button variant={'main'} text={'Main reduced'} marginBottom={spacings.s} reduceColor />
                <Button variant={'main'} text={'Main reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'main'} text={'Main reduced loading'} marginBottom={spacings.s} reduceColor loading />
                <Button variant={'alternative'} text={'Alternative'} marginBottom={spacings.s} />
                <Button variant={'alternative'} text={'Alternative disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'alternative'} text={'Alternative loading'} marginBottom={spacings.s} loading />
                <Button variant={'alternative'} text={'Alternative reduced'} marginBottom={spacings.s} reduceColor />
                <Button variant={'alternative'} text={'Alternative reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'alternative'} text={'Alternative reduced loading'} marginBottom={spacings.s} reduceColor loading />
                <Button variant={'danger'} text={'Danger'} marginBottom={spacings.s} />
                <Button variant={'danger'} text={'Danger disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'danger'} text={'Danger loading'} marginBottom={spacings.s} loading />
                <Button variant={'danger'} text={'Danger reduced'} marginBottom={spacings.s} reduceColor />
                <Button variant={'danger'} text={'Danger reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'danger'} text={'Danger reduced loading'} marginBottom={spacings.s} reduceColor loading />
                <Button variant={'warning'} text={'Warning'} marginBottom={spacings.s} />
                <Button variant={'warning'} text={'Warning disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'warning'} text={'Warning'} marginBottom={spacings.s} loading />
                <Button variant={'warning'} text={'Warning reduced'} marginBottom={spacings.s} reduceColor />
                <Button variant={'warning'} text={'Warning reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'warning'} text={'Warning reduced loading'} marginBottom={spacings.s} reduceColor loading />
                <Button variant={'success'} text={'Success'} marginBottom={spacings.s} />
                <Button variant={'success'} text={'Success disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'success'} text={'Success loading'} marginBottom={spacings.s} loading />
                <Button variant={'success'} text={'Success reduced'} marginBottom={spacings.s} reduceColor />
                <Button variant={'success'} text={'Success reduced disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'success'} text={'Success reduced loading'} marginBottom={spacings.s} reduceColor loading />
                <Button variant={'content'} text={'Button with content variant'} marginBottom={spacings.s} />
                <Button variant={'content'} text={'Button with content variant disabled'} marginBottom={spacings.s} disabled />
                <Button variant={'content'} text={'Button with content variant loading'} marginBottom={spacings.s} loading />
                <Button variant={'content'} text={'Button with content variant'} marginBottom={spacings.s} reduceColor />
                <Button variant={'content'} text={'Button with content variant disabled'} marginBottom={spacings.s} reduceColor disabled />
                <Button variant={'content'} text={'Button with content variant loading'} marginBottom={spacings.s} reduceColor loading />
            </Box>
        </>
    );
}
