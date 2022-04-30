import { render } from '@redwoodjs/testing/web'

import InputStop from './InputStop'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InputStop', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputStop />)
    }).not.toThrow()
  })
})
