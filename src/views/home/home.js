import * as React from 'react'

import { ParallaxBox, Text } from 'components'
import { HomeContainer, HomeContent } from './home.styles'

const HomeView = () => {
  const texts = Array.from({ length: 50 }).map((_, i) => (
    <div key={i}>
      <Text textStyle="h1" color="white">
        Hello World {i}
      </Text>
    </div>
  ))

  return (
    <HomeContainer>
      <HomeContent>
        <ParallaxBox
          translateY={[-10, 10]}
          translateX={[-10, 10]}
          speed={200}
        />
        <ParallaxBox
          translateY={[-40, 40]}
          translateX={[-40, 40]}
          speed={400}
        />
        <ParallaxBox
          translateY={[-90, 90]}
          translateX={[-90, 90]}
          speed={800}
        />
      </HomeContent>
      <Text textStyle="h1" color="white">
        Boilerplate by KayPacha
      </Text>
      {texts}
    </HomeContainer>
  )
}

export default HomeView
