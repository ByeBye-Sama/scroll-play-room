import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from 'components'

describe('Text', () => {
  it('renders a text', () => {
    render(<Text>Boilerplate by KayPacha</Text>)

    const content = screen.getByText(/Boilerplate by KayPacha/i)

    expect(content).toBeInTheDocument()
  })
})
