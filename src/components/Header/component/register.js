import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

const initialState = {
  passVerification: "",
  disabled: "",
  error: "",
  open: false,
  user: {
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    password: "",
    payment_method: "debit"
  }
}

export default class RegisterModal extends Component {
  constructor(){
    super();
    this.state = initialState;
    this.onClick = this.onClick.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handlePasswordVerification = this.handlePasswordVerification.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChangeValue = (e) => {
    var u = this.state.user
    if(u.hasOwnProperty(e.target.name)) {
      u[e.target.name] = e.target.value
      this.setState({user: u})
    }
  };

  handlePasswordVerification = (e) => {
    this.setState({passVerification: e.target.value},
        function() {
              if (this.state.user.password === this.state.passVerification) {
              console.log("samepassword")
                this.setState({disabled: true})
            } else {
              console.log("incorrect passwords")
                this.setState({disabled: false})
            }
        })
  }

  handleCreateUser() {
    fetch('http://localhost:9000/sign-in', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "client": this.state.user }),
    })
  };

  onClick() {
    console.log("when clicking, the form data is:");
    console.log(this.state.user);
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
        label="Crear Cuenta"
        disabled={!this.state.disabled}
        buttonStyle={{
          borderRadius: 0
        }}
        style={{
          boxShadow: 0
        }}
        onTouchTap={this.handleClose}
        onClick={this.handleCreateUser}
      />,
    ];

    return (
      <div>
        <FlatButton
          label="Crear Cuenta"
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
                name = "first_name"
                value={this.state.user.first_name}
                onChange={this.handleChangeValue}
              />
              <TextField
                hintText="Escriba su correo electrónico"
                floatingLabelText="Correo Electrónico"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
                name = "email"
                value={this.state.user.email}
                onChange={this.handleChangeValue}
              />
              <TextField
                hintText="Escriba su contraseña"
                floatingLabelText="Contraseña"
                type="password"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
                name = "password"
                value={this.state.user.password}
                onChange={this.handleChangeValue}
              />
            </div>
            <div className="col l6">
              <TextField
                hintText="Escriba sus apellidos"
                floatingLabelText="Apellidos"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
                name = "last_name"
                value={this.state.user.last_name}
                onChange={this.handleChangeValue}
              />
              <TextField
                hintText="Escriba su número de contacto"
                floatingLabelText="Número Teléfonico"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
                name = "phone"
                value={this.state.user.phone}
                onChange={this.handleChangeValue}
              />
              <TextField
                hintText="Repita su contraseña"
                floatingLabelText="Repita Contraseña"
                type="password"
                fullWidth={true}
                floatingLabelStyle={{color: '#4c5661'}}
                underlineFocusStyle={{borderColor: '#000'}}
                name = "passVerification"
                value={this.state.passVerification}
                onChange={this.handlePasswordVerification}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
