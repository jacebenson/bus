import { render } from '@redwoodjs/testing/web'

import StopPage from './StopPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StopPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StopPage />)
    }).not.toThrow()
  })
})
