import React, { useState } from 'react';
import { useTheme, Box, Button, Text, MiddleCellModal, ScrollView } from '@fractal-software/fractal-ui';
import { getTitleTextAccessibilityProps } from '../../accessibility/getTitleTextAccessibilityProps';

export function MiddleCellModalFragment(): JSX.Element {
    const { spacings } = useTheme();
    const [middleCellVisible, setMiddleCellVisible] = useState(false);
    const [middleCellOverflowVisible, setMiddleCellOverflowVisible] = useState(false);

    const toggleMiddleCell = () => setMiddleCellVisible((currentValue) => !currentValue);
    const toggleMiddleCellOverflow = () => setMiddleCellOverflowVisible((currentValue) => !currentValue);

    return (
        <>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Middle Cell Modal Fragment
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Middle Cell Modal' onPress={toggleMiddleCell} />
                <MiddleCellModal visible={middleCellVisible} onDismiss={toggleMiddleCell}>
                    <Box>
                        <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCell} />
                    </Box>
                </MiddleCellModal>
            </Box>
            <Text variant='title' {...getTitleTextAccessibilityProps(1)}>
                Middle Cell Modal Fragment With Overflow
            </Text>
            <Box marginTop={spacings.s} marginBottom={spacings.xl}>
                <Button variant='main' text='Show Middle Cell Modal With Overflow' onPress={toggleMiddleCellOverflow} />
                <MiddleCellModal visible={middleCellOverflowVisible} onDismiss={toggleMiddleCellOverflow}>
                    <Box flex={1}>
                        <ScrollView flex={1}>
                            <Text marginBottom={spacings.m}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ligula et orci fermentum imperdiet.
                                Vestibulum magna elit, pellentesque ac feugiat sed, luctus id purus. Mauris vel maximus tellus, sed interdum
                                augue. Vestibulum et commodo eros. In dictum, velit at mattis tincidunt, nibh ipsum elementum neque, ac
                                vestibulum felis lectus a augue. Ut efficitur congue sapien, a consectetur massa varius quis. Curabitur et
                                leo leo. Nunc fermentum velit a quam gravida, non vulputate lectus scelerisque. Morbi rutrum tortor nulla, a
                                efficitur enim euismod in. Cras vehicula sollicitudin eros eu bibendum. Integer ac congue dui, id ultricies
                                urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
                                malesuada erat non ultrices condimentum. In hac habitasse platea dictumst. Donec commodo dignissim felis a
                                venenatis. Aenean vitae diam justo. Praesent ut dignissim nunc. Nullam interdum dui tincidunt purus
                                efficitur vulputate. Curabitur mi urna, porttitor quis molestie a, porttitor sit amet tellus. Quisque
                                dignissim neque odio, in blandit magna varius sed. Aenean fringilla massa vel ornare ullamcorper. Fusce
                                venenatis tristique sem, consequat pretium lectus pulvinar nec. Maecenas ut purus justo. Aliquam erat
                                volutpat. Praesent a sodales elit, id feugiat sapien. Proin ultricies iaculis nisl, a mattis urna sodales
                                viverra. Sed feugiat eleifend nisi in tincidunt. Integer vitae suscipit quam. Suspendisse sodales pharetra
                                turpis, congue dignissim ante finibus eu. Ut ut magna eu quam commodo porttitor. Nunc nisl ipsum, euismod ac
                                dolor iaculis, aliquet dictum nulla. Nunc egestas, neque ut aliquet consequat, dui risus viverra sapien,
                                eget tincidunt nulla lacus ac arcu. Nam id ipsum laoreet, dignissim metus in, porta sapien. In porta
                                porttitor nunc ac interdum. Duis nunc lorem, volutpat id aliquam ut, semper ac velit. Integer porttitor
                                finibus facilisis. Suspendisse varius, enim fermentum semper rutrum, orci leo ultricies neque, vitae
                                ultricies diam sem eget neque. Proin congue turpis sed libero dapibus, nec suscipit quam tincidunt. Donec
                                sit amet pretium ipsum, sed sodales tellus. Vestibulum elementum, massa ut condimentum imperdiet, augue nunc
                                venenatis ipsum, at tincidunt ex sapien quis sapien. Proin tempor elit urna, id placerat justo lobortis
                                porta. Suspendisse convallis purus non metus porttitor, vel mattis turpis semper. Vestibulum est urna,
                                mattis vitae velit quis, molestie porttitor nulla. Proin vitae urna in nulla molestie gravida. Etiam quis
                                metus ut lectus pulvinar maximus eu quis felis. Curabitur sit amet nibh ultricies, pretium erat vitae,
                                pretium dolor. Aenean eu erat efficitur, efficitur odio rhoncus, scelerisque nunc. Fusce non massa
                                pellentesque, bibendum augue non, cursus erat. Fusce ac varius dui. Ut neque risus, rhoncus venenatis
                                bibendum sit amet, pharetra ut sapien. Aliquam sed maximus ante. Praesent euismod quam et dolor dignissim,
                                at mattis lorem consectetur. Suspendisse egestas fringilla elementum. Pellentesque scelerisque ultricies
                                nisi. Curabitur rutrum, tortor sed congue pretium, leo dui egestas ligula, sit amet congue metus sem sit
                                amet neque. Sed euismod condimentum nisi et posuere. Nulla facilisi. Suspendisse fringilla molestie tortor
                                fringilla vehicula. Nulla eu suscipit dolor, convallis rhoncus justo. Fusce maximus justo tortor, et dapibus
                                lacus ornare porttitor. Aliquam lectus tortor, dapibus eget fermentum vel, facilisis sit amet tellus.
                                Curabitur vitae purus sit amet massa sagittis aliquam.
                            </Text>
                            <Button variant='warning' text='Dismiss Cell Modal' onPress={toggleMiddleCellOverflow} />
                        </ScrollView>
                    </Box>
                </MiddleCellModal>
            </Box>
        </>
    );
}
