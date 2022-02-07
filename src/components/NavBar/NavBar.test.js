import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should render NavBar component", () => {
    render(<NavBar />);
    const navBar = screen.getByRole('navigation')

    expect(navBar).toBeInTheDocument();
  });

  it("should render NavBar with custom title", () => {
    render(<NavBar title='My custom title'/>)
    const navBar = screen.getByRole('navigation')

    expect(navBar).toHaveTextContent(/my custom title/i)
  })
});
