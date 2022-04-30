// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route } from '@redwoodjs/router'
const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/route" page={RouteBetaPage} name="routeBaseStart" />
      <Route path="/route/{busGlob...}" page={RouteBetaPage} name="routeBase" />
      <Route path="/stop" page={StopPage} name="stop" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
