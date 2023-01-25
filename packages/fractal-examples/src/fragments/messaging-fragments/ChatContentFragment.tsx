import React, { useState } from 'react';
import { ChatContent, ChatLoadingIndicator, MinimalMessageData } from '@fractal/fractal-messaging';
import { AudioMessagePlayerProvider } from '@fractal/fractal-media';
import { useOpenURL } from './useOpenURL';
import { Box, Button, Layer, useTheme } from '@fractal/fractal-ui';
import { MessageTextField } from './MessageTextField';

const defaultMessages: MinimalMessageData[] = [
    {
        id: '1',
        senderType: 'bot',
        favorite: true,
        text: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s., when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id: '2',
        senderType: 'user',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: '3',
        senderType: 'bot',
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    },
    {
        id: '4',
        senderType: 'user',
        favorite: true,
        text: 'Lorem Ipsum has been the bob'
    },
    {
        id: '5',
        senderType: 'bot',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id: '6',
        senderType: 'user',
        text: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s., when an unknown printer took a galley of type.'
    },
    {
        id: '7',
        senderType: 'user',
        text: 'Este es un mensaje con ñoño'
    },
    {
        id: '8',
        senderType: 'bot',
        image: 'https://picsum.photos/id/237/200/160'
    },
    {
        id: '9',
        senderType: 'bot',
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
    },
    {
        id: '10',
        senderType: 'bot',
        video: 'https://www.youtube.com/watch?v=cnFVmvbztKQ'
    },
    {
        id: '11',
        senderType: 'bot',
        audio: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3'
    },
    {
        id: '12a',
        senderType: 'bot',
        text: 'Bueno, te explico: Básicamente hay tres estilos de liderazo que debieras poder utilizar según la situación para lograr resultados a traves de otras personas: \n\nLiderazgo directivo para mostrar rumbo \n\nLiderazgo Democrático para aprovechar las ideas de todos \n \nLiderazgo Desarrollador para incrementar la capacidad del equipo'
    },
    {
        id: '12b',
        senderType: 'bot',
        audio: 'https://react-native-track-player.js.org/example/Longing.mp3'
    },
    {
        id: '13',
        senderType: 'user',
        text: 'Recomendación:\nAsegúrate que entiende que tus propuestas le ayudarán a hacer las cosas más rápido, mejor y que podrá tener el control. Eso será música para sus oidos.'
    },
    {
        id: '14',
        senderType: 'user',
        text: `Hello this is an example of the ParsedText: \nlinks like: \nhttps://www.google.com/ or https://www.facebook.com are clickable and phone number 444-555-6666 can call too. But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com And the magic number is 42! #react #react-native`
    },
    { id: '15', senderType: 'bot', text: 'Este es un mensaje simple con un link: https://www.youtube.com/' },
    { id: '16', senderType: 'user', text: 'Poder dar y recibir retroalimentación abiertamente' },
    {
        id: '17',
        senderType: 'bot',
        text: 'Te propongo que dibujes el flujo de información. Especifica quién le debe comunicar a quién, en qué forma y sobre qué temas. Luego junta a las personas involucradas y propón esta forma de asegurar que la información llegue a tiempo a la persona que deba estar enterada. Definan entre todos cuál será el mejor canal de comunicación para cada tipo de tema.'
    },
    {
        id: '18',
        senderType: 'bot',
        text: 'Para que la información se comparta se requiere haber acordado el canal de comunicación. Por ejemplo: Teléfono, red social, en juntas, pizarrones, chat de equipo, etc. ¿Cómo sería mejor compartir la información en el caso que planteas? Escríbelo aquí.'
    },
    {
        id: '19',
        senderType: 'user',
        text: 'Android problems'
    },
    {
        id: '20',
        senderType: 'bot',
        text: '¿Se informaron oportunamente los avances o los cambios?'
    },
    {
        id: '21',
        senderType: 'bot',
        text: 'Para enfocarnos en tu conflicto interpersonal, primero dime cómo se llama la persona con quien tuviste ese conflicto.'
    },
    {
        id: '22',
        senderType: 'bot',
        text: 'Es importante hacer consciente cómo te has estado sintiendo. Dime Balta, ¿cuál de los siguientes estados de ánimo describe mejor tu sentir?'
    }
];

const urlTextStyle = {
    color: 'blue',
    textDecorationLine: 'underline'
};

const defaultButtons = ['Button One', 'Button Two', 'Button Three', 'Button Four', 'Button Five', 'Button Six'];

const botMessages = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed turpis a neque tempor suscipit. Sed ullamcorper feugiat odio, vel porta metus facilisis at. Fusce sed tortor tellus. Aliquam accumsan mi quis lobortis tristique. Praesent id placerat enim, quis pulvinar lacus. Sed ac ornare eros. Maecenas sit amet ipsum sed tortor elementum elementum. Mauris auctor consectetur nunc eget malesuada. Proin purus lacus, placerat sit amet mauris nec, volutpat condimentum risus.',
    'Nam mauris felis, sollicitudin vel augue ut, aliquam lobortis nisi. Sed turpis sapien, rhoncus consectetur lorem venenatis, porttitor viverra tellus.'
];

function createWaitPromise(time: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

// TODO: Revisar funcionamiento de onSubmitEditing

function ChatButtons({ buttons, onButtonPress }: { buttons: string[] | null; onButtonPress?: (text: string, index: number) => void }) {
    const { spacings, sizes } = useTheme();
    const renderButton = (title: string, index: number) => {
        const handleButtonPress = () => {
            onButtonPress?.(title, index);
        };

        return (
            <Button
                key={`${index}`}
                text={title}
                onPress={handleButtonPress}
                marginRight={spacings.s}
                marginBottom={spacings.s}
                minHeight={sizes.interactiveItemHeight}
            />
        );
    };

    return (
        <Box>
            <Layer flexDirection='row' maxWidth={1360} flexWrap='wrap'>
                {buttons != null && buttons.map(renderButton)}
            </Layer>
        </Box>
    );
}

export function ChatContentFragment(): JSX.Element {
    const [messages, setMessages] = useState(defaultMessages);
    const [isLoading, setIsLoading] = useState(false);
    const [buttons, setButtons] = useState<string[] | null>(null);
    const openURL = useOpenURL();

    const handleFavoriteMessage = (message: MinimalMessageData) => {
        const newMessage = { ...message, favorite: !message.favorite };
        setMessages((currentMessages) => currentMessages.map((messageItem) => (messageItem.id === message.id ? newMessage : messageItem)));
    };

    const handleSendMessage = async (userMessage: string) => {
        const newId = messages.length;
        setIsLoading(true);
        setMessages((currentMessages) => [...currentMessages, { id: newId.toString(), senderType: 'user', text: userMessage }]);

        for (const message of botMessages) {
            await createWaitPromise(2000);
            setMessages((currentMessages) => {
                const messageId = currentMessages.length;
                return [...currentMessages, { id: messageId.toString(), senderType: 'bot', text: message }];
            });
        }
        if (buttons != null) {
            setButtons(null);
        } else {
            setButtons(defaultButtons);
        }
        setIsLoading(false);
    };

    const footer = isLoading ? (
        <ChatLoadingIndicator />
    ) : buttons != null ? (
        <ChatButtons buttons={buttons} onButtonPress={handleSendMessage} />
    ) : (
        <MessageTextField onSend={handleSendMessage} />
    );

    return (
        <AudioMessagePlayerProvider>
            <ChatContent
                messages={messages}
                onFavoritePress={handleFavoriteMessage}
                onSharePress={(message) => console.log('sharePress: ', message)}
                onSend={handleSendMessage}
                placeholder='Escribe aquí'
                parsePatterns={[
                    {
                        type: 'url',
                        style: urlTextStyle,
                        onPress: openURL
                    }
                ]}
                isLoading={isLoading}
                customFooter={footer}
            />
        </AudioMessagePlayerProvider>
    );
}
