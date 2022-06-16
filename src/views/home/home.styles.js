import styled from 'styled-components'

import theme from 'theme'

const HomeContainer = styled.div({
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  display: 'flex',
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
