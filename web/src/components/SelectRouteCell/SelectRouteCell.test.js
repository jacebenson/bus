import { render, screen } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './SelectRouteCell'
import { standard } from './SelectRouteCell.mock'
import SelectRouteCell from './SelectRouteCell'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('SelectRouteCell', () => {
  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success selectRoute={standard().selectRoute} />)
    }).not.toThrow()
  })
})
