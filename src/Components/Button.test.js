import Button from './Button'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

let container = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('button behaviour based on input value', () => {
  it('renders with props or without', () => {
    act(() => {
      render(<Button />, container)
    })
    expect(container.textContent).toBe('')

    act(() => {
      render(
        <Button buttonName="Button 1" onClickFunction={console.log('Test')} />,
        container
      )
    })
    expect(container.textContent).toBe('Button 1')
  })
})
