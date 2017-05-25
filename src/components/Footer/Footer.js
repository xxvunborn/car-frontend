import React, {Component} from 'react'
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar'
import Dialog from 'material-ui/Dialog'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
        <footer>
          <div class="mui-container mui--text-center">
            Made with ♥ by <a href="#">TRIBILINES</a>
          </div>
        </footer>
        )
  }
}

export default Footer
