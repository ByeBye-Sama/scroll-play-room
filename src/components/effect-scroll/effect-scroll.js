import React, { useEffect } from 'react'
import smoothScroll from './smooth-scroll'

const EffectScroll = props => {
  const { children } = props

  useEffect(() => {
    smoothScroll(document, 25, 20)
  }, [])

  return <div style={{ width: '100%' }}>{children}</div>
}

export default EffectScroll
