import React from 'react'
import { IndexLink, Link } from 'react-router'
import Header from '../../components/Header'
import Footer from '../../components/footer'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './PageLayout.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const PageLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className="text-center">
      <Header />
      <div className="page-layout__viewport">
        {children}
      </div>
      <Footer/>
    </div>
  </MuiThemeProvider>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
