import React, {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import Dialog from 'material-ui/Dialog'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
        <footer>
          <div className="mui-container mui--text-center">
            <p className="gray-color font-light">Made with <b>♥</b> by <a href="/"><b className="gray-color">Tribilines</b></a></p>
            <p></p>
          </div>
        </footer>
        )
  }
}

export default Footer
