import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '35%',
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
      <FlatButton
        label="Cancelar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Aceptar"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton
          icon={<FontIcon className="material-icons">person</FontIcon>}
          label="Iniciar Sesión"
          primary={true}
          onTouchTap={this.handleOpen} />
        <Dialog title="Login" actions={actions} open={this.state.open} contentStyle={customContentStyle} >
          <TextField
            hintText="Escriba su email"
            floatingLabelText="Usuario"
            fullWidth={true}
          />
          <TextField
            hintText="Esciba su constraseña"
            floatingLabelText="Contraseña"
            type="password"
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}

export default LoginModal
