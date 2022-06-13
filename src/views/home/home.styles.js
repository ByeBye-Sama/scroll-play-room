import styled from 'styled-components'

import theme from 'theme'

const HomeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '100vw',
  overflowX: 'hidden',

  '> :not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
})

const HomeContent = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})

export { HomeContainer, HomeContent }
