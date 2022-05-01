import {
  Box,
  Flex,
  Heading,
  Spacer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

export const QUERY = gql`
  query NextTripResultsQuery($route: Int!, $direction: Int!, $stop: String!) {
    nextTripResults(route: $route, direction: $direction, stop: $stop) {
      stops {
        id
        latitide
        longitude
        name
      }
      alerts {
        closed
        description
      }
      departures {
        tripId
        actual
        stopId
        departureText
        departureTime
        description
        gate
        routeId
        routeName
        directionId
        directionName
        terminal
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>(nexttripresultcell)Error: {error.message}</div>
)

export const Success = ({ nextTripResults }) => {
  return (
    <>
      <Box px={2}>
        <Flex>
          <Heading fontSize={{ sm: '20px', md: '32px' }}>
            {nextTripResults.stops[0].name}
          </Heading>
          <Spacer />
          <Box display={'flex'}>
            {nextTripResults.stops.length === 1 && (
              <Text>
                Stop #:
                {nextTripResults.stops[0].id}
              </Text>
            )}
            {nextTripResults.stops.length > 1 && (
              <Text>
                Stop #:
                {nextTripResults.stops
                  .map((stop) => {
                    return stop.id
                  })
                  .toString()}
              </Text>
            )}
          </Box>
        </Flex>
        <Table size={{ sm: 'sm' }} variant="striped" colorScheme="orange">
          <Thead>
            <Tr backgroundColor={'yellow.300'}>
              <Th>ROUTE</Th>
              <Th>DESTINATION</Th>
              <Th textAlign={'right'}>DEPARTURE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/**if no results show no departures */}
            {nextTripResults.departures.length === 0 ? (
              <Tr>
                <Td colSpan={3}>No Departures</Td>
              </Tr>
            ) : (
              nextTripResults.departures.map((departure) => {
                let key = `${departure.tripId}`
                return (
                  <Tr key={key}>
                    <Td pl={2}>
                      {departure.routeName}
                      {departure.terminal}
                    </Td>
                    <Td>{departure.description}</Td>
                    <Td textAlign={'right'} pr={2}>
                      {departure.departureText}
                    </Td>
                  </Tr>
                )
              })
            )}
          </Tbody>
        </Table>
      </Box>
      {/*
      <div>stops</div>
      <pre>{JSON.stringify(nextTripResults.stops, '', '  ')}</pre>
      <div>alerts</div>
      <pre>{JSON.stringify(nextTripResults.alerts, '', '  ')}</pre>
      <div>departures</div>
      <pre>{JSON.stringify(nextTripResults.departures, '', '  ')}</pre>
      */}
    </>
  )
}
