import { FormLabel, Select } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import SelectStopCell from '../SelectStopCell/SelectStopCell'
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

export const Success = ({ route, directions }) => {
  const {
    //handleSubmit,
    register,
    formState: { errors /*isSubmitting*/ },
  } = useForm()
  let [direction, setDirection] = useState(null)
  useEffect(() => {
    register('direction', { required: true })
  }, [register])
  let handleUpdateDirection = (e) => {
    setDirection(e.target.value)
  }
  return (
    <Fragment>
      <FormLabel htmlFor="direction">Select a direction</FormLabel>
      <Select
        id="direction"
        placeholder="Select a direction"
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
      {direction && <SelectStopCell route={route} direction={direction} />}
    </Fragment>
  )
}
