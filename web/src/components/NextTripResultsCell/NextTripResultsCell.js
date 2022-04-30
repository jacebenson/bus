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
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ nextTripResults }) => {
  return (
    <>
      <Box p={10}>
        <Flex>
          <Heading>{nextTripResults.stops[0].name}</Heading>
          <Spacer />
          <Text>
            Stop #:{' '}
            {nextTripResults.stops.map((stop) => {
              return stop.id
            })}
          </Text>
        </Flex>
        <Table>
          <Thead>
            <Tr>
              <Th>ROUTE</Th>
              <Th>DESTINATION</Th>
              <Th>DEPARTURE</Th>
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
                    <Td>{departure.routeName}</Td>
                    <Td>{departure.description}</Td>
                    <Td>{departure.departureText}</Td>
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
