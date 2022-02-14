import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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

  /* Style */
  it("should render NavBar black background color", () => {
    render(<NavBar />)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveStyle({
      backgroundColor: '#000'
    })
  })

  /* User Interaction / Events */
  it("should show extra content on hover the NavBar title", () => {
    render(<NavBar />)
    /* use getBy* to check if an element is PRESENT in the DOM */
    const navBarTitle = screen.getByText(/hover me/i)
  
    expect(navBarTitle).toBeInTheDocument()
    /* use queryBy* to check if an element is NOT PRESENT in the DOM */
    /* extra content is hidden by default */
    expect(screen.queryByText(/extra content/i)).not.toBeInTheDocument()
    
    userEvent.hover(navBarTitle)
    /* when hovering over the navBarTitle
      we expect the extra content to be visible */
    expect(screen.getByText(/extra content/i)).toBeInTheDocument()

    userEvent.unhover(navBarTitle)
    /* when unhovering out of the navBarTitle 
      we expect the extra content to be hidden again */
    expect(screen.queryByText(/extra content/i)).not.toBeInTheDocument()
  })
})
