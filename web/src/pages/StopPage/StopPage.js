import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StopPage = () => {
  return (
    <>
      <MetaTags title="Stop" description="Stop page" />

      <h1>StopPage</h1>
      <p>
        Find me in <code>./web/src/pages/StopPage/StopPage.js</code>
      </p>
      <p>
        My default route is named <code>stop</code>, link to me with `
        <Link to={routes.stop()}>Stop</Link>`
      </p>
    </>
  )
}

export default StopPage
