import { Parallax } from 'react-scroll-parallax'

import { Text } from 'components/text'
import { ContainerTest } from './parallax-box.styles'

const ParallaxBox = props => {
  const { speed, translateY, translateX, ...rest } = props

  return (
    <Parallax
      translateY={translateY}
      translateX={translateX}
      speed={speed}
      {...rest}
    >
      <ContainerTest>
        <Text textStyle="h2" color="white">
          Speed {speed}
        </Text>
      </ContainerTest>
    </Parallax>
  )
}

export default ParallaxBox
