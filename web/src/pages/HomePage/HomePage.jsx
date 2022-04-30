import { Heading } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => (
  <>
    <Heading>Jace Transist Real-time bus information</Heading>
    <Link
      to={routes.routeBase({
        busGlob: `5/`,
      })}
    >
      Route
    </Link>
  </>
)

export default HomePage
