import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { browserHistory } from 'react-router';

const customContentStyle = {
  width: '40%',
  maxWidth: 'none',
};

class LoginModal extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
      valueTab: 'client',
      user: {
        email: "",
        password: ""
      },
      mechanic: {
        emailMechanic: "",
        passwordMechanic: ""
      },
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({
      open: false,
      user: {
        email: "",
        password: ""
      },
      mechanic: {
        emailMechanic: "",
        passwordMechanic: ""
      },
    });
  };

  handleChangeValue = (e) => {
    const u = this.state.user
    if(u.hasOwnProperty(e.target.name)) {
      u[e.target.name] = e.target.value
      this.setState({user: u})
    }
  };

  handleChangeValueMechanic = (e) => {
    const m = this.state.mechanic
    if(m.hasOwnProperty(e.target.name)){
      m[e.target.name] = e.target.value
      this.setState({mechanic: m})
    }
  }

  handleChangeTab = (value) => {
    this.setState({
      valueTab: value,
    });
  };

  handleSubmit = () => {
    fetch('https://automotive-api.herokuapp.com/sign-in', {
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "credentials": this.state.user
          }),
    })
    .then((response) => {
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(response => {
          if(response.status != 201){
            alert("Usuario o Contraseña incorrecto")
          }
          else{
            sessionStorage.setItem('jwtToken', response.data.data.token)
            browserHistory.push('/client', response.data)
            this.handleClose()
          }
      })
    })
  }

  handleSubmitMechanic = () => {
    // BORRA EL CONSOLE LOG UNA VEZ DE QUE TE FUNCIONE BIEN
    console.log(this.state.mechanic)
    fetch('https://automotive-api.herokuapp.com/mech-in', {
    // CAMBIA ESTA URL POR LA DEL MECANICO
          method: 'POST',
          headers: {
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "credentials": this.state.mechanic
          }),
    })
    .then((response) => {
      response.json().then(data => ({
        data: data,
        status: response.status
      })
      ).then(response => {
          if(response.status != 201){
            alert("Usuario o Contraseña incorrecto")
          }
          else{
            sessionStorage.setItem('jwtToken', response.data.data.token)
            browserHistory.push('/mechanic', response.data)
            this.handleClose()
          }
      })
    })
  }

  checkValuesForm = () => {
    if (this.state.user.email === "" || this.state.user.password === "" ){
      return false
    }
    return true
  }

  checkValuesFormMechanic = () => {
    if (this.state.mechanic.emailMechanic === "" || this.state.mechanic.passwordMechanic === "" ){
      return false
    }
    return true
  }

  render() {
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
        <Dialog title="INICIAR SESIÓN"
          open={this.state.open}
          contentStyle={customContentStyle}
          className='text-center'>
          <Tabs
            value={this.state.value}
            onChange={this.handleChangeTab}
            tabItemContainerStyle={{backgroundColor:'#FFF'}}
            inkBarStyle={{background:'#FF5252'}}
          >
             <Tab
               label="Cliente"
               value="client"
               style={{color:'#000'}}
               >
               <div>
                 <TextField
                   hintText="Escriba su email"
                   floatingLabelText="Email"
                   fullWidth={true}
                   name="email"
                   floatingLabelStyle={{color:'#4c5661'}}
                   underlineFocusStyle={{borderColor:'#000'}}
                   onChange={this.handleChangeValue}
                 />
                 <TextField
                   hintText="Escriba su contraseña"
                   floatingLabelText="Contraseña"
                   type="password"
                   fullWidth={true}
                   name="password"
                   floatingLabelStyle={{color:'#4c5661'}}
                   underlineFocusStyle={{borderColor:'#000'}}
                   onChange={this.handleChangeValue}
                 />

                <br /><br /><br />

                <div className="row">
                  <div className="col-md-6">
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
                      fullWidth={true}
                    />
                  </div>
                  <div className="col-md-6">
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
                      fullWidth={true}
                    />
                  </div>
                </div>
               </div>
             </Tab>
             <Tab
               label="Mecánico"
               value="mechanic"
               style={{color:'#000'}}
              >
               <div>
                 <TextField
                   hintText="Escriba su email"
                   floatingLabelText="Email"
                   fullWidth={true}
                   name="emailMechanic"
                   floatingLabelStyle={{color:'#4c5661'}}
                   underlineFocusStyle={{borderColor:'#000'}}
                   onChange={this.handleChangeValueMechanic}
                 />
                 <TextField
                   hintText="Escriba su contraseña"
                   floatingLabelText="Contraseña"
                   type="password"
                   fullWidth={true}
                   name="passwordMechanic"
                   floatingLabelStyle={{color:'#4c5661'}}
                   underlineFocusStyle={{borderColor:'#000'}}
                   onChange={this.handleChangeValueMechanic}
                 />

                 <br /><br /><br />

                 <div className="row">
                   <div className="col-md-6">
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
                       fullWidth={true}
                     />
                   </div>
                   <div className="col-md-6">
                     <RaisedButton
                       backgroundColor="#FF5252"
                       labelColor="#FFF"
                       label="Ingresar"
                       disabled={!this.checkValuesFormMechanic()}
                       buttonStyle={{
                         borderRadius: 0
                       }}
                       style={{
                         boxShadow: 0
                       }}
                       onTouchTap={this.handleSubmitMechanic}
                       fullWidth={true}
                     />
                   </div>
                 </div>
               </div>
             </Tab>
           </Tabs>
        </Dialog>
      </div>
    );
  }
}

export default LoginModal
