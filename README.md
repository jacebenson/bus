# README

Recreate Metro Transits' NextTrip site sans "Show my bus" feature.

## Requirements

Build a web application that provides functionality similar to the one found at https://www.metrotransit.org/nextripbadge.aspx.

### Required Functionality

-[x] Select a bus route from a list of available routes
-[x] Select a direction for a bus route
-[x] For a given route and direction, display the stops
-[x] Respond reasonably to browser back and forward buttons (for example, implement application routing)
-[ ] Include Test code that validates application works as expected.

**The "Show My Bus" mapping feature is not expected**

## Build this application

To build this, there isn't a whole lot here.

1. Require Yarn is installed.
2. Require NodeJS is installed.
3. Clone this repository

```sh
git clone https://github.com/jacebenson/bus
cd bus
yarn
```

## Run this application

To run this, you just run one command after it's installed.

```sh
yarn rw dev
```

## List of assumptions

1. I should abstract the API
2. Getting it functioning before getting it tested is important.
3. I should deploy this so I can share a working URL.
4. Tests are not as important as a working site.

## Useful links

NextTrip API documentation: https://svc.metrotransit.org/nextrip
Swagger: https://svc.metrotransit.org/swagger/index.html
