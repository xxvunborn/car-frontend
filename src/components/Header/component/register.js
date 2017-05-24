import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '35%',
  maxWidth: 'none',
};

export default class RegisterModal extends Component {
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
        <FlatButton label="Crear Cuenta" secondary={true} onTouchTap={this.handleOpen} />
        <Dialog title="Nueva Cuenta" actions={actions} open={this.state.open} contentStyle={customContentStyle} >
          <TextField
            hintText="Escriba su nombre"
            floatingLabelText="Nombre"
            fullWidth={true}
          />
          <TextField
            hintText="Escriba su apellido"
            floatingLabelText="Apellido"
            fullWidth={true}
          />
          <TextField
            hintText="Esciba su constraseña"
            floatingLabelText="Contraseña"
            type="password"
            fullWidth={true}
          />
          <TextField
            hintText="Escriba su email"
            floatingLabelText="Correo Electrónico"
            fullWidth={true}
          />
          <TextField
            hintText="Escriba su numero de contacto"
            floatingLabelText="Numero Telefónico"
            fullWidth={true}
          />
        </Dialog>
      </div>
    );
  }
}
