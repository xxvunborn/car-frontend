import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './Header.scss'

// Components
import LogoutButton from './component/logoutbutton';
import MyProfile from './component/myprofile'

class HeaderLogged extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
      return (
        <div className="container">
          <Toolbar className='toolbar-menu'>
            <ToolbarGroup firstChild={true}>
              <a href="/"><img src="logotipo.png" height="45px" /></a>
            </ToolbarGroup>
            <ToolbarGroup>
              <MyProfile />
              <LogoutButton />
            </ToolbarGroup>
          </Toolbar>
        </div>
      );
    }
}

export default HeaderLogged
