import { fetch } from 'cross-undici-fetch'

let transformStop = (stop) => {
  var returnedStop = {
    id: stop.stop_id,
    latitide: stop.latitude,
    longitude: stop.longitude,
    name: stop.description,
  }
  return returnedStop
}
let transformAlerts = (alert) => {
  return {
    closed: alert.stop_closed,
    description: alert.alert_text,
  }
}
let transformDepartures = (departure) => {
  return {
    tripId: departure.trip_id,
    actual: departure.actual,
    stopId: departure.stop_id,
    departureText: departure.departure_text,
    departureTime: departure.departure_time,
    description: departure.description,
    gate: departure?.gate || '',
    routeId: departure.route_id,
    routeName: departure.route_short_name,
    directionId: departure.direction_id,
    directionName: departure.direction_text,
    terminal: departure?.terminal || '',
  }
}

export const routes = async () => {
  const response = await fetch(`https://svc.metrotransit.org/nextripv2/routes`)
  const json = await response.json()
  let returnedRoutes = json.map((route) => {
    return {
      id: parseInt(route.route_id, 10),
      name: route.route_label,
    }
  })
  return returnedRoutes
}

export const directions = async ({ route }) => {
  const response = await fetch(
    `https://svc.metrotransit.org/nextripv2/directions/${route}`
  )
  const json = await response.json()
  let returnedDirections = json.map((direction) => {
    return {
      id: direction.direction_id,
      name: direction.direction_name,
    }
  })
  return returnedDirections
}

export const stops = async ({ route, direction }) => {
  const response = await fetch(
    `https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}`
  )
  const json = await response.json()
  let returnedStops = json.map((stop) => {
    return {
      name: stop.description,
      placeCode: stop.place_code,
    }
  })
  return returnedStops
}

export const nextTripResults = async ({ route, direction, stop }) => {
  console.log(
    `in nextTripResults Route: ${route} Dir: ${direction} Stop:${stop}`
  )
  const response = await fetch(
    `https://svc.metrotransit.org/nextripv2/${route}/${direction}/${stop}`
  )
  const json = await response.json()
  console.log('in nextTripResults json: ', json)
  let stops = json.stops.map(transformStop)
  let alerts = json.alerts.map(transformAlerts)
  let departures = json.departures.map(transformDepartures)
  let nextTripResults = {
    stops,
    alerts,
    departures,
  }
  return nextTripResults
}

export const nextTripResultsByStop = async ({ stop }) => {
  const response = await fetch(`https://svc.metrotransit.org/nextripv2/${stop}`)
  const json = await response.json()
  let stops = json.stops.map(transformStop)
  let alerts = json.alerts.map(transformAlerts)
  let departures = json.departures.map(transformDepartures)
  let nextTripResults = {
    stops,
    alerts,
    departures,
  }
  return nextTripResults
}
