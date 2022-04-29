// Define your own mock data here:
export const standard = () => ({
  nextTripResults: {
    stops: [
      {
        id: 56873,
        latitide: 44.853778,
        longitude: -93.238644,
        name: 'MOA Transit Station Gate A',
      },
    ],
    alerts: [],
    departures: [
      {
        actual: true,
        //trip_id: '21032403-MAR22-MVS-BUS-Weekday-01',
        stopId: 56873,
        departureText: '6 Min',
        departureTime: 1651209600,
        description: 'Fremont Av / Brklyn Ctr / Transit Ctr',
        gate: 'A',
        routeId: '5',
        routeName: '5',
        directionId: 0,
        directionName: 'NB',
        terminal: 'M',
        //schedule_relationship: 'Scheduled',
      },
    ],
  },
})
export const noDepartures = () => ({
  nextTripResults: {
    stops: [
      {
        id: 56873,
        latitide: 44.853778,
        longitude: -93.238644,
        name: 'MOA Transit Station Gate A',
      },
    ],
    alerts: [],
    departures: [],
  },
})
