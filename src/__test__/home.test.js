import React from 'react'
import { render, screen } from '@testing-library/react'
import { HomeView } from 'views'

describe('Text', () => {
  it('renders a text', () => {
    render(<HomeView />)

    const content = screen.getByText(/Boilerplate by KayPacha/i)

    expect(content).toBeInTheDocument()
  })
})
