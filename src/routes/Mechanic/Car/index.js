import { injectReducer } from '../../../store/reducers'

export default (store, auth) => ({
  path : 'cars',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Car = require('./containers/CarContainer').default

      /*  Return getComponent   */
      cb(null, Car)

    /* Webpack named bundle   */
    }, 'car')
  }
})
