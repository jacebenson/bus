import { FormLabel, Select } from '@chakra-ui/react'
import { navigate, routes } from '@redwoodjs/router'
import { Fragment, useEffect } from 'react'
export const QUERY = gql`
  query FindRouteQuery {
    busRoutes: routes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  setStop,
  setDirection,
  setRoute,
  route,
  busRoutes,
  register,
  setFocus
}) => {
  // useEffect(() => {
  //   if (!route) {
  //     setFocus('route')
  //   }
  // }, [])
  let handleUpdateRoute = (e) => {
    setRoute(parseInt(e.target.value, 10))
    //navigate(
    //  routes.route({ routeId: e.target.value })
    //)
    navigate(routes.routeBase({busGlob: `/${e.target.value}`,}))
  }
  return (
    <Fragment>
      <FormLabel htmlFor="route">Select a route</FormLabel>
      <Select
        id="route"
        placeholder="Select a route"
        defaultValue={(()=>{
          if(route) return route

        })()}
        {...register('route')}
        onChange={(e) => {
          handleUpdateRoute(e)
        }}
      >
        {busRoutes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name}
          </option>
        ))}
      </Select>
    </Fragment>
  )
}
