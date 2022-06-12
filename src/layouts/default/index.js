import React from 'react'
import styled from 'styled-components'
import theme from 'theme'

export const Main = styled.main`
  background-color: ${theme.colors.black};
  min-height: 100vh;
`

const DefaultLayout = props => {
  const { children } = props

  return <Main id="main">{children}</Main>
}

export default DefaultLayout
