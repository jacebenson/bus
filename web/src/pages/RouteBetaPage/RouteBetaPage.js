import {
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Image,
} from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import SelectDirectionCell from 'src/components/SelectDirectionCell/SelectDirectionCell'
import SelectRouteCell from 'src/components/SelectRouteCell/SelectRouteCell'
import SelectStopCell from 'src/components/SelectStopCell/SelectStopCell'
import NextTripResultsCell from 'src/components/NextTripResultsCell/NextTripResultsCell'
import NextTripResultsByStopCell from 'src/components/NextTripResultsByStopCell/NextTripResultsByStopCell'
import { navigate, routes } from '@redwoodjs/router'
import { useForm } from 'react-hook-form'
import InputStop from 'src/components/InputStop/InputStop'

const RouteBetaPage = ({ busGlob }) => {
  let [routeId, directionId, stopId] = (() => {
    console.log('busGlob', busGlob)
    if (busGlob) {
      console.log('should retrun', busGlob.split('/'))
      return busGlob.split('/')
    }
    return [-1, -1, '']
  })()

  let [route, setRoute] = useState(parseInt(routeId, 10))
  let [direction, setDirection] = useState(parseInt(directionId, 10))
  let [stopForSearch, setStopForSearch] = useState('')
  let [getDeparturesByStop, setGetDeparturesByStop] = useState(false)
  let [stop, setStop] = useState(stopId)
  const {
    handleSubmit,
    setFocus,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  let fieldProps = {
    route,
    direction,
    stop,
    setRoute,
    setDirection,
    setStop,
    register,
    formState: { errors, isSubmitting },
    setFocus,
    handleSubmit,
  }
  return (
    <>
      <MetaTags title="RouteBeta" description="RouteBeta page" />
      <Box mx={{ md: 10, sm: 0 }}>
        <Heading pl={2} backgroundColor={'orange'}>
          Jace{"'"}s Realtime Bus Lookups
        </Heading>
        <Image
          opacity={0.3}
          src="/metro-transit-banner-unsplash.jpg"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Tabs>
          <TabList>
            <Tab
              onClick={() => {
                navigate(routes.routeBaseStart())
              }}
            >
              By Route + Direction + Stop
            </Tab>
            <Tab
              onClick={() => {
                setStop(null)
              }}
            >
              By Stop
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SelectRouteCell {...fieldProps} />
              {route >= 0 && <SelectDirectionCell {...fieldProps} />}
              {route >= 0 && direction >= 0 && (
                <SelectStopCell {...fieldProps} />
              )}
              {route >= 0 && direction >= 0 && stop && (
                <Box>
                  <NextTripResultsCell
                    route={route}
                    direction={direction}
                    stop={stop}
                  />
                </Box>
              )}
            </TabPanel>
            <TabPanel>
              <InputStop
                stop={stopForSearch}
                setStop={setStopForSearch}
                getDeparturesByStop={getDeparturesByStop}
                setGetDeparturesByStop={setGetDeparturesByStop}
                handleSubmit={handleSubmit}
                register={register}
              />
              {getDeparturesByStop && stopForSearch && (
                <NextTripResultsByStopCell stop={stopForSearch} />
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  )
}

export default RouteBetaPage
