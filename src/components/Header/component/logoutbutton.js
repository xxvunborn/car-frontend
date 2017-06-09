import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class LogoutButton extends Component {

  handleLogout = () => {
    sessionStorage.removeItem('jwtToken')
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <RaisedButton
          backgroundColor="#000"
          labelColor="#FFF"
          label="Cerrar sesión"
          buttonStyle={{
            borderRadius: 0
          }}
          onTouchTap={this.handleLogout}
          style={{
            boxShadow: 0
          }}
        />
      </div>
    );
  }
}

export default LogoutButton
