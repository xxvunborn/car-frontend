import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};

 class LoginModal extends Component {
  constructor(){
    super();
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Cancelar"
        buttonStyle={{
          borderRadius: 0,
        }}
        style={{
          boxShadow: 0,
          marginRight: 10
        }}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        backgroundColor="#FF5252"
        labelColor="#FFF"
        label="Ingresar"
        buttonStyle={{
          borderRadius: 0
        }}
        style={{
          boxShadow: 0
        }}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          backgroundColor="#FF5252"
          labelColor="#FFF"
          label="Iniciar Sesión"
          buttonStyle={{
            borderRadius: 0
          }}
          onTouchTap={this.handleOpen}
          style={{
            boxShadow: 0
          }}
        />
        <Dialog title="INICIAR SESIÓN" actions={actions} open={this.state.open} contentStyle={customContentStyle} className='text-center'>
          <TextField
            hintText="Escriba su email"
            floatingLabelText="Usuario"
            fullWidth={true}
            floatingLabelStyle={{color: '#4c5661'}}
            underlineFocusStyle={{borderColor: '#000'}}
          />
          <TextField
            hintText="Escriba su constraseña"
            floatingLabelText="Contraseña"
            type="password"
            fullWidth={true}
            floatingLabelStyle={{color: '#4c5661'}}
            underlineFocusStyle={{borderColor: '#000'}}
          />
        </Dialog>
      </div>
    );
  }
}

export default LoginModal
