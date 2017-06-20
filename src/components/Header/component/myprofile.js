import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFace from 'material-ui/svg-icons/action/face';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router';

class MyProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleDashboard = () => {
    browserHistory.push('/dashboard')
    this.handleRequestClose()
  }

  handleCars = () => {
    browserHistory.push('/car')
    this.handleRequestClose()
  };

  render(){
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          backgroundColor="#FF5252"
          icon={<ActionFace color="#FFF" />}
          buttonStyle={{
            width: 36,
            borderRadius: 0
          }}
          style={{
            minWidth: 36,
            marginRight: 10,
            boxShadow: 0
          }}
        />
        <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
            animation={PopoverAnimationVertical}
            zDepth={0}
            className="popover-style"
          >
            <Menu>
              <MenuItem
                primaryText="Mi dashboard"
                onTouchTap={this.handleDashboard}
              />
            <MenuItem primaryText="Mi perfil"/>
              <MenuItem
                primaryText="Mis automóviles"
                onTouchTap={this.handleCars}
              />
            </Menu>
          </Popover>
      </div>
    );
  }

}

export default MyProfile
