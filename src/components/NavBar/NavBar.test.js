import { render, screen, fireEvent } from "@testing-library/react"
import NavBar from "./NavBar"

describe("NavBar", () => {
  /* Rendering */
  it("should render NavBar component", () => {
    render(<NavBar />)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toBeInTheDocument()
  })

  /* Props */
  it("should render NavBar with custom title", () => {
    render(<NavBar title='My custom title'/>)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveTextContent(/my custom title/i)
  })

  /* User Interaction / Events */
  it("should change the NavBar background color", () => {
    render(<NavBar title='My custom title'/>)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveStyle({
      backgroundColor: '#000000' // default color
    })

    fireEvent.click(navBar)

    expect(navBar).toHaveStyle({
      backgroundColor: '#6A5ACD' // the color should change after click
    })

    fireEvent.click(navBar)

    expect(navBar).toHaveStyle({
      backgroundColor: '#000000' // the color should go back to initial state
    })
  })
})
