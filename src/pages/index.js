import * as React from 'react'
import { HomeView } from 'views'

import Scrollbar from 'react-smooth-scrollbar'

const HomePage = () => {
  const [value, setValue] = React.useState(false)

  return (
    <Scrollbar
      damping={0.01}
      thumbMinSize={60}
      renderByPixels={true}
      continuousScrolling={true}
      plugins={{
        overscroll: {
          damping: 0.2,
          enabled: true,
          maxOverscroll: 150,
          effect: 'bounce',
        },
      }}
      onScroll={() => setValue(!value)}
    >
      <div style={{ height: '100vh' }}>
        <HomeView />
      </div>
    </Scrollbar>
  )
}

export default HomePage
