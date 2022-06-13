import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'

import { DefaultLayout } from 'layouts'
import { reset } from 'utils'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ParallaxProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ParallaxProvider>
    </>
  )
}

export default MyApp
