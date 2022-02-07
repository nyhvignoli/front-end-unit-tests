import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
  it("should render NavBar component", () => {
    render(<NavBar />);
    const navBar = screen.getByRole('navigation')

    expect(navBar).toBeInTheDocument();
  });
});
