import { FormLabel, Select } from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import NextTripResultsCell from '../NextTripResultsCell/NextTripResultsCell'
export const QUERY = gql`
  query FindSelectStopQuery($route: Int!, $direction: Int!) {
    stops(route: $route, direction: $direction) {
      name
      placeCode
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ route, direction, stops }) => {
  const {
    //handleSubmit,
    register,
    formState: { errors /*isSubmitting*/ },
  } = useForm()
  let [stop, setStop] = useState(null)
  useEffect(() => {
    register('stop', { required: true })
  }, [register])
  let handleUpdateStop = (e) => {
    setStop(e.target.value)
  }
  return (
    <Fragment>
      <FormLabel htmlFor="stop">Select a stop</FormLabel>
      <Select
        id="stop"
        placeholder="Pick a stop"
        {...register('stop')}
        onChange={(e) => {
          console.log(`STOP ${e.target.value}`)
          handleUpdateStop(e)
        }}
      >
        {stops.map((stop) => (
          <option key={stop.placeCode} value={stop.placeCode}>
            {stop.name}
          </option>
        ))}
      </Select>
      {stop && (
        <NextTripResultsCell route={route} direction={direction} stop={stop} />
      )}
    </Fragment>
  )
}
