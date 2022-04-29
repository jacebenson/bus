import { Loading, Empty, Failure, Success } from './NextTripResultsCell'
import { standard } from './NextTripResultsCell.mock'
import { noDepartures } from './NextTripResultsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export const successNoDepartures = () => {
  return <Success {...noDepartures()} />
}

export default { title: 'Cells/NextTripResultsCell' }
