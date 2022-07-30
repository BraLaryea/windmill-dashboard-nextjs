import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html x-data='data()'>
            <Head >
                <script src="/plugins/init-alpine.js" async/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}