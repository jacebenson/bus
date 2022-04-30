export const schema = gql`
  type metroRoute {
    name: String!
    id: Int!
  }
  type metroDirection {
    name: String!
    id: Int!
  }
  type metroStop {
    name: String!
    placeCode: String!
  }
  type Stop {
    id: Int!
    latitide: Float!
    longitude: Float!
    name: String
  }
  type Departure {
    tripId: String!
    actual: Boolean!
    stopId: Int!
    departureText: String!
    departureTime: Int!
    description: String!
    gate: String!
    routeId: Int!
    routeName: String!
    directionId: Int!
    directionName: String!
    terminal: String!
  }
  type Alert {
    closed: Boolean!
    description: String!
  }
  type nextTripResult {
    stops: [Stop]
    alerts: [Alert]
    departures: [Departure]
  }
  type Query {
    routes: [metroRoute] @skipAuth
    directions(route: Int!): [metroDirection] @skipAuth
    stops(route: Int!, direction: Int!): [metroStop] @skipAuth
    nextTripResults(
      route: Int!
      direction: Int!
      stop: String!
    ): nextTripResult @skipAuth
  }
`
