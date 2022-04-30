import { FormLabel, Select } from '@chakra-ui/react'
import { navigate, routes } from '@redwoodjs/router'
import { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

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
  <div style={{ color: 'red' }}>(stopcell)Error: {error.message}</div>
)

export const Success = ({
  register,
  route,
  direction,
  setStop,
  stop,
  stops,
  setFocus,
}) => {
  useEffect(() => {
    if (direction >= 0) {
      setFocus('stop')
    }
  }, [])
  let handleUpdateStop = (e) => {
    setStop(e.target.value)
    navigate(
      // this is the way to set the path to /route?routeId=1&directionId=1&stopId=MAAM
      //routes.route({
      //  routeId: route,
      //  directionId: direction,
      //  stopId: e.target.value,
      //})

      // this is the way to set the path to /route/1/1/MAAM
      routes.routeBase({
        busGlob: `${route}/${direction}/${e.target.value}`,
      })
    )
  }
  return (
    <Fragment>
      <FormLabel htmlFor="stop">Select a stop</FormLabel>
      <Select
        id="stop"
        placeholder="Pick a stop"
        defaultValue={stop}
        {...register('stop')}
        onChange={(e) => {
          handleUpdateStop(e)
        }}
      >
        {stops.map((stop) => (
          <option key={stop.placeCode} value={stop.placeCode}>
            {stop.name}
          </option>
        ))}
      </Select>
    </Fragment>
  )
}
