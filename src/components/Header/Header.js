import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './Header.scss'

// Components
import LoginModal from './component/loginmodal';
import RegisterModal from './component/register';

const isAuthenticated = () => {
  /*if(sessionStorage.jwtToken){
    return false
  }*/
  return true
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 3
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    if(isAuthenticated){
      return (
        <div className="container">
          <Toolbar className='toolbar-menu'>
            <ToolbarGroup firstChild={true}>
              <img src="logotipo.png" height="45px" />
            </ToolbarGroup>
            <ToolbarGroup>
              <LoginModal />
              <RegisterModal />
            </ToolbarGroup>
          </Toolbar>
        </div>
      );
    }
    else{
      return (
        <div className="container">
          <Toolbar className='toolbar-menu'>
            <ToolbarGroup firstChild={true}>
              <img src="logotipo.png" height="45px" />
            </ToolbarGroup>
            <ToolbarGroup>

            </ToolbarGroup>
          </Toolbar>
        </div>
      );
    }

  }
}
export default Header
