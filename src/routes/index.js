// We only need to import the modules necessary for initial render
import { browserHistory } from 'react-router';
import CoreLayout from '../layouts/PageLayout/PageLayout'
import MechanicLayout from '../layouts/PageLayout/PageLayout'
import dashboardLayout from '../layouts/LoggedLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import clientdashboardRoute from './Client/Dashboard'
import carRoute from './Car'
import mechanicDashboardRoute from './Mechanic/Dashboard'
import profileRoute from './Client/Profile'
import CarRoute from './Mechanic/Car'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const isAuthenticated = () => {
  if(!sessionStorage.jwtToken){
    browserHistory.push('/');
  }
}

const isLoggedIn = () => {
  if(sessionStorage.jwtToken){
    browserHistory.push('dashboard')
  }
}

export const createRoutes = (store) => ({
  path        : '/',
  childRoutes : [{
    component   : CoreLayout,
    indexRoute  : Home,
    onEnter     : isLoggedIn,
  },
  {
    path      : '/client',
    component : dashboardLayout,
    onEnter   : isAuthenticated,
    indexRoute: clientdashboardRoute(store),
      childRoutes : [
        //DashboardRoute(store) example of child route like  /dashboard/index
      ]
  },
  {
    path      : '/profile',
    component : dashboardLayout,
    onEnter   : isAuthenticated,
    indexRoute: profileRoute(store),
      childRoutes : [
      ]
  },
  {
    path      : '/mechanic',
    component : dashboardLayout,
    onEnter   : isAuthenticated,
    indexRoute: mechanicDashboardRoute(store),
      childRoutes : [
        //DashboardRoute(store) example of child route like  /dashboard/index
        CarRoute(store),
      ]
  },
  {
    path      : '/car',
    component : dashboardLayout,
    onEnter   : isAuthenticated,
    indexRoute: carRoute(store),
      childRoutes : [
        //
      ]
  }
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
