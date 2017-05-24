import React, {Component} from 'react';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

// Components
import LoginModal from './component/loginmodal';
import RegisterModal from './component/register';

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
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="All Broadcasts" />
            <MenuItem value={2} primaryText="All Voice" />
            <MenuItem value={3} primaryText="All Text" />
            <MenuItem value={4} primaryText="Complete Voice" />
            <MenuItem value={5} primaryText="Complete Text" />
            <MenuItem value={6} primaryText="Active Voice" />
            <MenuItem value={7} primaryText="Active Text" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Opciones" />
            <FontIcon className="material-icons">menu</FontIcon>
          <ToolbarSeparator />
          <LoginModal />
          <RegisterModal />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default Header
