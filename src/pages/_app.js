import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { DefaultLayout } from 'layouts'
import { reset } from 'utils'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
