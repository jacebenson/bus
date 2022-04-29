import { FormLabel, Select } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import SelectDirectionCell from '../SelectDirectionCell/SelectDirectionCell'
export const QUERY = gql`
  query FindRouteQuery {
    routes {
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

export const Success = ({ routes }) => {
  const {
    //handleSubmit,
    register,
    formState: { errors /*isSubmitting*/ },
  } = useForm()
  let [route, setRoute] = useState(null)
  useEffect(() => {
    register('route', { required: true })
  }, [register])
  let handleUpdateRoute = (e) => {
    setRoute(e.target.value)
  }
  return (
    <Fragment>
      <FormLabel htmlFor="route">Select a route</FormLabel>
      <Select
        id="route"
        placeholder="Select a route"
        {...register('route')}
        onChange={(e) => {
          console.log(`ROUTE ${e.target.value}`)
          handleUpdateRoute(e)
        }}
      >
        {routes.map((route) => (
          <option key={route.id} value={route.id}>
            {route.name}
          </option>
        ))}
      </Select>
      {route && <SelectDirectionCell route={route} />}
    </Fragment>
  )
}
