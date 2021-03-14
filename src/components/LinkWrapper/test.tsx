import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render the link', () => {
    render(<LinkWrapper href="/link">acess</LinkWrapper>)

    const children = screen.getByText(/acess/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link')
  })
})
