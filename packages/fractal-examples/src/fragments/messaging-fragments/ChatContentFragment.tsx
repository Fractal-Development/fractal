import { ChatContent, MinimalMessageData } from '@bma98/fractal-messaging';
import React, { useState } from 'react';

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
        id: '12',
        senderType: 'bot',
        text: 'Bueno, te explico: Básicamente hay tres estilos de liderazo que debieras poder utilizar según la situación para lograr resultados a traves de otras personas: \n\nLiderazgo directivo para mostrar rumbo \n\nLiderazgo Democrático para aprovechar las ideas de todos \n \nLiderazgo Desarrollador para incrementar la capacidad del equipo'
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

export function ChatContentFragment(): JSX.Element {
    const [messages, setMessages] = useState(defaultMessages);

    const handleFavoriteMessage = (message: MinimalMessageData) => {
        const newMessage = { ...message, favorite: !message.favorite };
        setMessages((currentMessages) => currentMessages.map((messageItem) => (messageItem.id === message.id ? newMessage : messageItem)));
    };

    const handleSendMessage = (message: string) => {
        const newId = messages.length;

        setMessages((currentMessages) => [...currentMessages, { id: newId.toString(), senderType: 'user', text: message }]);
    };

    return (
        <ChatContent
            messages={messages}
            onFavoritePress={handleFavoriteMessage}
            onSharePress={(message) => console.log('sharePress: ', message)}
            onSend={handleSendMessage}
            placeholder='Escribe aquí'
        />
    );
}
