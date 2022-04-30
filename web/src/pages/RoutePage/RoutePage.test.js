import { render } from '@redwoodjs/testing/web'

import RoutePage from './RoutePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RoutePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoutePage />)
    }).not.toThrow()
  })
})
