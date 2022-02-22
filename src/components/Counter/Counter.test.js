import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  it('should render Counter components with all the elements', () => {
    render(<Counter />)
    const minusButton = screen.getByRole('button', { name: '-' })
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    expect(minusButton).toBeInTheDocument()
    expect(minusButton).toBeDisabled()
    expect(counter).toBeInTheDocument()
    expect(plusButton).toBeInTheDocument()
  })

  it('should increase the counter by clicking on plusButton', () => {
    render(<Counter />)
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    userEvent.click(plusButton)

    expect(counter).toHaveTextContent('1')

    userEvent.click(plusButton)

    expect(counter).toHaveTextContent('2')

    userEvent.dblClick(plusButton)

    expect(counter).toHaveTextContent('4')
  })

  it('should decrease the counter by clicking on minusButton', () => {
    render(<Counter />)
    const minusButton = screen.getByRole('button', { name: '-' })
    const counter = screen.getByText('0')
    const plusButton = screen.getByRole('button', { name: '+' })

    userEvent.dblClick(plusButton)

    expect(counter).toHaveTextContent('2')
    expect(minusButton).not.toBeDisabled()

    userEvent.click(minusButton)

    expect(counter).toHaveTextContent('1')
  })
})
