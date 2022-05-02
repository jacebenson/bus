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
5. I assumed desktop and mobile were important.

A few more comments.

This site is using the following bits

1. Lambda function to abastract the API call.
2. GraphQL to allow for better quering of data.
3. React for the front end.
4. Chakra-UI to have a great accessible starting point
5. Using RedwoodJS as a base for this saved me some time, but added some things that weren't necessary.
6. When looking at the code base, focus your attention on these files/folders.

  - /web/src/App.js # Is that start point for the application.
  - /web/src/Routes.js # Controls every path for the application
  - /web/src/pages/* # Is where all pages are defined.  These will include components and "cells".
  - /web/src/components/* # Here's the smaller components.  I didn't do a good job of writing tests.  I started to but time just ran out.
  - /api/src/services/metrotransit.js # is where the API abstraction is made to Metro Transit's API.
  - /api/src/graphql/routes.sdl.js # is where the schema definition language files are set up define what attribute are where for what calls.
  - Everything else can be ignored.

## Useful links

NextTrip API documentation: https://svc.metrotransit.org/nextrip
Swagger: https://svc.metrotransit.org/swagger/index.html
