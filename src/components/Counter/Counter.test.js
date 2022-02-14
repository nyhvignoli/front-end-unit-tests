import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  /* Rendering */
  it('should render Counter component with all the elements', () => {
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

  /* User Interaction / Events */
  it('should increase the counter value by clicking on plus button', () => {
    render(<Counter />)
    const minusButton = screen.getByRole('button', { name: '-' })
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    expect(minusButton).toBeDisabled()
    expect(plusButton).not.toBeDisabled()

    userEvent.click(plusButton)

    expect(counter).toHaveTextContent('1')
    expect(minusButton).not.toBeDisabled()

    userEvent.click(plusButton)

    expect(counter).toHaveTextContent('2')

    userEvent.dblClick(plusButton)

    expect(counter).toHaveTextContent('4')
  })

  it('should decrease the counter value by clicking on minus button', () => {
    render(<Counter />)
    const minusButton = screen.getByRole('button', { name: '-' })
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    expect(minusButton).toBeDisabled()
    expect(plusButton).not.toBeDisabled()

    userEvent.dblClick(plusButton)

    expect(counter).toHaveTextContent('2')
    expect(minusButton).not.toBeDisabled()

    userEvent.click(minusButton)

    expect(counter).toHaveTextContent('1')

    userEvent.click(minusButton)

    expect(counter).toHaveTextContent('0')
    expect(minusButton).toBeDisabled()
  })
})
