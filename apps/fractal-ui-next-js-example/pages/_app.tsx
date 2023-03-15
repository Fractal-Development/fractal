import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width' />
            </Head>
            <div suppressHydrationWarning id='root'>
                {typeof window === 'undefined' ? null : <Component {...pageProps} />}
            </div>
        </>
    );
}

export default MyApp;
