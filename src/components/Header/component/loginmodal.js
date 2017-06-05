import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import { browserHistory } from 'react-router';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};

 class LoginModal extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
      user: {
        email: "",
        password: ""
      }
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChangeValue = (e) => {
    const u = this.state.user
    if(u.hasOwnProperty(e.target.name)) {
      u[e.target.name] = e.target.value
      this.setState({user: u})
    }
  };

  handleSubmit = () => {
    fetch('https://automotive-api.herokuapp.com/login', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "credentials": this.state.user }),
    })
    .then((response) => {
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(response => {
        console.log(response.status, response.data.data.token)
          if(response.status != 201){
            console.log("HANDLE ERROR!")
          }else{
            sessionStorage.setItem('jwtToken', response.data.data.token);
            browserHistory.push('/dashboard/index');
          }
          this.handleClose()
      })
    })
  }

  checkValuesForm = () => {
    if (this.state.user.email === "" || this.state.user.password === "" ){
      return false
    }
    return true
  }

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
        disabled={!this.checkValuesForm()}
        buttonStyle={{
          borderRadius: 0
        }}
        style={{
          boxShadow: 0
        }}
        onTouchTap={this.handleSubmit}
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
            name="email"
            floatingLabelStyle={{color: '#4c5661'}}
            underlineFocusStyle={{borderColor: '#000'}}
            onChange={this.handleChangeValue}
          />
          <TextField
            hintText="Escriba su constraseña"
            floatingLabelText="Contraseña"
            type="password"
            fullWidth={true}
            name="password"
            floatingLabelStyle={{color: '#4c5661'}}
            underlineFocusStyle={{borderColor: '#000'}}
            onChange={this.handleChangeValue}
          />
        </Dialog>
      </div>
    );
  }
}

export default LoginModal
