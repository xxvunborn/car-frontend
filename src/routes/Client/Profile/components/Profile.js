import React, {Component} from 'react'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './Profile.scss'

class Profile extends Component{

  constructor(){
    super();
    this.state = {
      user: {
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        payment_method: ""
      },
      cars: {}
    }
  }

  componentWillMount = () => {
    fetch('https://automotive-api.herokuapp.com/api/clients/me', {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + sessionStorage.jwtToken
      }
    })
    .then((response) => {
      response.json().then(data => ({
        data: data,
        status: response.status
      }))
      .then(response => {
          if(response.status != 200){
            console.log("error")
            browserHistory.push('/')
          }
          else{
            this.setState({
              user: {
                id: response.data.data.user.id,
                email: response.data.data.user.email,
                first_name: response.data.data.user.first_name,
                last_name: response.data.data.user.last_name,
                phone: response.data.data.user.phone,
                payment_method: response.data.data.payment_method
              },
              cars: response.data.data.cars
            });
          }
      })
    })
  }

  render(){
    return(
      <div>
        <div className="container">

        <div className="row">
          <div className="col-md-12 right-align">
            <RaisedButton
              backgroundColor="#FF5252"
              labelColor="#FFF"
              label="Editar información"
              buttonStyle={{
                borderRadius: 0
              }}
              style={{
                boxShadow: 0,
              }}
            />
          </div>
         </div>

          <div className="box-content">

            <div className="row">
              <div className="col-md-4">
                <img src="profile-img.jpg" className="image-profile" />
              </div>
              <div className="col-md-8 left-align">
                <p><b>Nombre Completo</b>: {this.state.user.first_name +" "+ this.state.user.last_name}</p>
                <p><b>Email</b>: {this.state.user.email}</p>
                <p><b>Teléfono</b>: {this.state.user.phone}</p>
                <p><b>Método de Pago</b>: Débito</p>
              </div>
            </div>

          </div>

          <br /><br />

        </div>
      </div>
    );
  }

}

export default Profile
