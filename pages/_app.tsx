import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/theme-container'

import '../styles/global.css'

import seoConfig from '../config/seo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeContainer>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
