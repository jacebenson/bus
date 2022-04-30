import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Input,
} from '@chakra-ui/react'
import { Fragment, useEffect, useState } from 'react'

const InputStop = ({
  stop,
  setStop,
  setGetDeparturesByStop,
  getDeparturesByStop,
}) => {
  let [error, setError] = useState('')
  useEffect(() => {
    if (getDeparturesByStop) {
      console.log('stopForSearch', stop)
    }
  }, [getDeparturesByStop])
  let updateButtonValue = (value) => {
    setStop(value)
  }
  return (
    <Fragment>
      <form>
        <Flex gap={1}>
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
              console.log('getDepartures', stop)
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
        {error && (
          <Box py={2}>
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          </Box>
        )}
      </form>
    </Fragment>
  )
}

export default InputStop
