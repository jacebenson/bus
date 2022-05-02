import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react'

const HomePage = () => (
  <>
    <MetaTags title="JaceBus" description="Jace Busses Are Great" />

    <Heading display={'none'}>Jace Busses Are Great</Heading>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.200',
                zIndex: -1,
              }}
            >
              Jace{"'"}s
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Busses Are Great
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Use my bus lookup service to never be late. Also did you know that
            Robbinsdale is getting the blue line to Target?
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              <Link
                to={routes.routeBase({
                  busGlob: `5/`,
                })}
              >
                Try it out
              </Link>
            </Button>
            <Button colorScheme={'green'} rounded={'full'}>
              <LinkOverlay href="http://github.com/jacebenson/bus">
                Github
              </LinkOverlay>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  </>
)

export default HomePage
