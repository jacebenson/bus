export const QUERY = gql`
  query FindSelectRouteQuery($id: Int!) {
    selectRoute: selectRoute(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ selectRoute }) => {
  return <div>{JSON.stringify(selectRoute)}</div>
}
