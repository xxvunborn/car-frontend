import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

export default class RegisterModal extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
      passVerification: "",
      user: {
        email: "",
        firstName: "",
        lastName: "",
        phone: "+569",
        password: "",
        payment_method: "debit"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChangePassVerification = (e) => {
    this.setState({passVerification: e.target.value})
  };

  handleChangeValue = (e) => {
    var u = this.state.user
    if(u.hasOwnProperty(e.target.name)) {
      u[e.target.name] = e.target.value
      this.setState({user: u})
    }
  };

  emailVerification = () => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(this.state.user.email) == false) {
        return false;
    }

    return true;
  }

  phoneVerification = () => {
    if(this.state.user.phone.length !== 12) {
      return false
    }
    return true
  };

  arePasswordsEquals = () => {
    if(this.state.user.password !== this.state.passVerification){
      return false
    }
    return true
  };

  isDisabled = () => {
    if (this.state.user.firstName.length === "" || this.state.user.lastName === "" ||
          this.state.user.email === ""     || this.state.user.phone === "" ||
            this.state.user.password === "")
    {
      console.log("missed variable")
      return true
    }

    if (!this.emailVerification()){
      console.log("invalid email")
      return true
    }

    if (!this.phoneVerification()){
      console.log("invalid phone")
      return true
    }

    if (!this.arePasswordsEquals()){
      console.log("Passwords are not equals")
      return true
    }

    return false
  };

  handleSubmit() {
    console.log(this.state.user, this.state.passVerification)
    return
    fetch('https://automotive-api.herokuapp.com/sign-in', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "client": this.state.user }),
    })
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
        label="Confirmar"
        buttonStyle={{
          borderRadius: 0
        }}
        style={{
          boxShadow: 0
        }}
        disabled={this.isDisabled()}
        onClick={this.handleSubmit}
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
                name = "firstName"
                value={this.state.user.firstName}
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
                name = "lastName"
                value={this.state.user.lastName}
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
                onChange={this.handleChangePassVerification}
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
