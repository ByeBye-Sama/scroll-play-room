/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { Text } from 'components'
import { HomeContainer } from './home.styles'

const HomeView = () => {
  const texts = Array.from({ length: 200 }).map((_, i) => (
    <div key={i}>
      <Text textStyle="h1" color="white">
        Hello World {i}
      </Text>
    </div>
  ))

  return (
    <HomeContainer>
      <Text textStyle="h1" color="white">
        Boilerplate by KayPacha
      </Text>
      {texts}
    </HomeContainer>
  )
}

export default HomeView
