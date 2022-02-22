import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavBar from './NavBar'

describe('NavBar', () => {
  /* Rendering */
  it('should render NavBar component', () => {
    render(<NavBar />)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toBeInTheDocument()
  })

  it('should render NavBar component with custom title', () => {
    render(<NavBar title={'hello world!'} />)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveTextContent(/hello world/i)
  })

  it('should render NavBar component with black background', () => {
    render(<NavBar />)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveStyle({
      backgroundColor: '#000'
    })
  })

  it('should show extra content on hover the NavBar title', () => {
    render(<NavBar title={'foo'} />)
    const title = screen.getByText('foo')
    expect(title).toBeInTheDocument()

    expect(screen.queryByText(/extra content/i)).not.toBeInTheDocument()

    userEvent.hover(title)

    expect(screen.getByText(/extra content/i)).toBeInTheDocument()

    userEvent.unhover(title)

    expect(screen.queryByText(/extra content/i)).not.toBeInTheDocument()
  })
})
