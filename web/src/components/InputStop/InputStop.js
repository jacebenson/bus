import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'

const InputStop = ({
  stop,
  setStop,
  setGetDeparturesByStop,
  getDeparturesByStop,
  handleSubmit,
  //errors,
  register,
}) => {
  let [error, setError] = useState('')
  let updateButtonValue = (value) => {
    setStop(value)
  }
  let onSubmit = () => {
    if (stop) {
      setGetDeparturesByStop(true)
    } else {
      setError('Please enter a stop')
    }
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={1}>
          <FormLabel htmlFor="stopCode">Stop</FormLabel>
          <Input
            id="stopCode"
            defaultValue={stop}
            onChange={(e) => {
              updateButtonValue(e.target.value)
            }}
            placeholder="56822 is on the 5's route"
          />
          <Button
            colorScheme={'orange'}
            value={stop}
            onClick={() => {
              if (stop.length > 0) {
                setGetDeparturesByStop(true)
                setError('')
              }
              if (stop.length === 0) {
                setError('No Stop # Entered')
              }
            }}
          >
            Search
          </Button>
        </Flex>
      </form>
      {error && (
        <Box py={2}>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        </Box>
      )}
    </Fragment>
  )
}

export default InputStop
