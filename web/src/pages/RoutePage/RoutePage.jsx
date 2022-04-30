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
const RoutePage = ({ test }) => {
  console.log('test from RoutePage', test)
  const { routeId, directionId, stopId } = useParams()
  console.log('ROUTE', routeId)
  console.log('DIRECTION', directionId)
  console.log('STOP', stopId)

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
  useEffect(() => {
    //if (!route) {
    // setFocus('route')
    //}
    //if (route) {
    //  setFocus('direction')
    //}
    //if (route && direction) {
    //  setFocus('stop')
    //}
  })
  return (
    <>
      <MetaTags title="Route" description="Route page" />
      <Box textAlign={'center'} minWidth={'50%'}>
        <Center>
          <Heading wordBreak={'break-word'}>
            Jace Transist Real-time bus information
          </Heading>
        </Center>
        <SimpleGrid columns={{ md: 3 }} spacing={6}>
          <GridItem colSpan={1}>...</GridItem>
        </SimpleGrid>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SelectRouteCell {...fieldProps} />
              <SelectDirectionCell {...fieldProps} />
              <SelectStopCell {...fieldProps} />
              <NextTripResultsCell
                route={route}
                direction={direction}
                stop={stop}
              />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default RoutePage
