import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme/index'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/poppins-v13-latin-300.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/poppins-v13-latin-regular.woff2"
            as="font"
            crossOrigin=""
          />
          <meta title="Hugo Claisse - Frontend Developer" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fafafa" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <meta name="application-name" content="&nbsp;" />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="180x180"
            href="/favicons/apple-touch-icon-180x180.png"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
