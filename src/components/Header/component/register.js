import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '45%',
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
        backgroundColor="#000"
        labelColor="#FFF"
        label="Aceptar"
        buttonStyle={{
          borderRadius: 0
        }}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton
          label="Crear Cuenta"
          labelColor="#000"
          style={{
            marginLeft: 10
          }}
          onTouchTap={this.handleOpen}
        />
      <Dialog title="NUEVA CUENTA" actions={actions} open={this.state.open} contentStyle={customContentStyle} className="text-center">
          <div className="row">
            <div className="col l6">
              <TextField
                hintText="Escriba su nombre"
                floatingLabelText="Nombre"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
              <TextField
                hintText="Escriba su correo electrónico"
                floatingLabelText="Correo Electrónico"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
              <TextField
                hintText="Escriba su contraseña"
                floatingLabelText="Contraseña"
                type="password"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
            </div>
            <div className="col l6">
              <TextField
                hintText="Escriba sus apellidos"
                floatingLabelText="Apellidos"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
              <TextField
                hintText="Escriba su número de contacto"
                floatingLabelText="Número Teléfonico"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
              <TextField
                hintText="Repita su contraseña"
                floatingLabelText="Repita Contraseña"
                type="password"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
              />
            </div>
          </div>


        </Dialog>
      </div>
    );
  }
}
