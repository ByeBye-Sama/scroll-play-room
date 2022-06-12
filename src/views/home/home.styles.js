import styled from 'styled-components'

import theme from 'theme'

const HomeContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '> :not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
})

export { HomeContainer }
