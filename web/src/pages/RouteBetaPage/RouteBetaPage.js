import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Center,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import SelectDirectionCell from 'src/components/SelectDirectionCell/SelectDirectionCell'
import SelectRouteCell from 'src/components/SelectRouteCell/SelectRouteCell'
import SelectStopCell from 'src/components/SelectStopCell/SelectStopCell'
import NextTripResultsCell from 'src/components/NextTripResultsCell/NextTripResultsCell'
import { useParams } from '@redwoodjs/router'
import { useForm } from 'react-hook-form'

const RouteBetaPage = ({ busGlob }) => {
  let [routeId, directionId, stopId] = busGlob?.split('/')
  let [route, setRoute] = useState(parseInt(routeId, 10))
  let [direction, setDirection] = useState(parseInt(directionId, 10))
  let [stop, setStop] = useState(stopId)
  const {
    //handleSubmit,
    setFocus,
    register,
    formState: { errors /*isSubmitting*/ },
  } = useForm()
  let fieldProps = {
    route,
    direction,
    stop,
    setRoute,
    setDirection,
    setStop,
    register,
    formState: { errors /*isSubmitting*/ },
    setFocus,
  }
  return (
    <>
      <MetaTags title="RouteBeta" description="RouteBeta page" />
      <Box mx={{ md: 10, sm: 0 }}>
        <Heading>Jace{"'"}s Realtime Bus Lookups</Heading>
        <Tabs>
          <TabList>
            <Tab>By Route + Direction + Stop</Tab>
            <Tab>By Stop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SelectRouteCell {...fieldProps} />
              {route >= 0 && <SelectDirectionCell {...fieldProps} />}
              {route >= 0 && direction >= 0 && (
                <SelectStopCell {...fieldProps} />
              )}
            </TabPanel>
            <TabPanel>Hello</TabPanel>
          </TabPanels>
        </Tabs>
        {route >= 0 && direction >= 0 && stop && (
          <Box>
            <NextTripResultsCell
              route={route}
              direction={direction}
              stop={stop}
            />
          </Box>
        )}
      </Box>
    </>
  )
}

export default RouteBetaPage
