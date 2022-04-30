import { FormLabel, Select } from '@chakra-ui/react'
import { navigate, routes } from '@redwoodjs/router'
import { Fragment, useEffect } from 'react'
export const QUERY = gql`
  query FindDirectionQuery($route: Int!) {
    directions(route: $route) {
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
  route,
  direction,
  setDirection,
  register,
  directions,
  setFocus,
}) => {
  console.log('from select direction', {
    route,
    direction,
  })
  useEffect(() => {
    if (route) {
      setFocus('direction')
    }
  }, [])
  let handleUpdateDirection = (e) => {
    setDirection(parseInt(e.target.value, 10))
    navigate(routes.route({ routeId: route, directionId: e.target.value }))
  }

  return (
    <Fragment>
      <FormLabel htmlFor="direction">Select a direction</FormLabel>
      <Select
        id="direction"
        placeholder="Select a direction"
        defaultValue={!isNaN(direction) && direction}
        {...register('direction')}
        onChange={(e) => {
          console.log(`DIRECTION ${e.target.value}`)
          handleUpdateDirection(e)
        }}
      >
        {directions.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name}
          </option>
        ))}
      </Select>
    </Fragment>
  )
}
