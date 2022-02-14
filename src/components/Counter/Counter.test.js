import { render, screen } from "@testing-library/react"
import Counter from "./Counter"

describe("Counter", () => {
  /* Rendering */
  it("should render Counter component with all the elements", () => {
    render(<Counter />)
    const minusButton = screen.getByRole('button', { name: '-' })
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    expect(minusButton).toBeInTheDocument()
    expect(minusButton).toBeDisabled()

    expect(counter).toBeInTheDocument()

    expect(plusButton).toBeInTheDocument()
    expect(plusButton).not.toBeDisabled()
  })
})
