import React, {Component} from 'react'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './Mechanic.scss'

class Mechanic extends Component{

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
            <div className="box-content">
              <div className="row">
                <div className="col-md-4">
                  <img src="profile-img.jpg" className="image-profile" />
                  <h4 className="margin-none">{this.state.user.first_name +" "+ this.state.user.last_name}</h4>
                  <h6 className="font-light">{this.state.user.email}</h6>
                </div>
                <div className="col-md-5 border-left-box">
                  <br />
                  <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam consectetur pulvinar magna eget vestibulum. In iaculis fringilla
                    consequat. Morbi tempor magna ac ex malesuada porta.
                  </p>
                </div>
                <div className="col-md-3 border-left-box">
                  <h4>Automóviles en revisión</h4>
                  <h1 className="number-cars font-light">3</h1>
                </div>
              </div>
            </div>
          </div>

          <br /><br />

          <div className="container">
            <div className="row">
              <div className="col-md-12 left-align">
                <h4><b className="red-color">Automóviles</b> en revisión</h4>
                <hr />
              </div>
            </div>
          </div>

          <br />

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="car-1.png" className="image-car" />
                <h5 className="font-light">BMW 3 Series Gran Turismo</h5>
                <h6><b className="red-color">Patente</b> BB CL 34</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-2.png" className="image-car" />
                <h5 className="font-light">BMW Serie 1</h5>
                <h6><b className="red-color">Patente</b> CC NM 26</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0,
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-3.png" className="image-car" />
                <h5 className="font-light">BMW Serie 6 Convertible</h5>
                <h6><b className="red-color">Patente</b> DD KS 19</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
            </div>
          </div>

          <br /><br /><br />
          <div className="container">
            <div className="row">
              <div className="col-md-12 left-align">
                <h4><b className="red-color">Automóviles</b> por atender</h4>
                <hr />
              </div>
            </div>
          </div>

          <br />

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="car-1.png" className="image-car" />
                <h5 className="font-light">BMW 3 Series Gran Turismo</h5>
                <h6><b className="red-color">Patente</b> BB CL 34</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-2.png" className="image-car" />
                <h5 className="font-light">BMW Serie 1</h5>
                <h6><b className="red-color">Patente</b> CC NM 26</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0,
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-3.png" className="image-car" />
                <h5 className="font-light">BMW Serie 6 Convertible</h5>
                <h6><b className="red-color">Patente</b> DD KS 19</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
            </div>

          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src="car-1.png" className="image-car" />
                <h5 className="font-light">BMW 3 Series Gran Turismo</h5>
                <h6><b className="red-color">Patente</b> BB CL 34</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-2.png" className="image-car" />
                <h5 className="font-light">BMW Serie 1</h5>
                <h6><b className="red-color">Patente</b> CC NM 26</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0,
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
              <div className="col-md-4">
                <img src="car-3.png" className="image-car" />
                <h5 className="font-light">BMW Serie 6 Convertible</h5>
                <h6><b className="red-color">Patente</b> DD KS 19</h6>
                <RaisedButton
                  backgroundColor="#FF5252"
                  labelColor="#FFF"
                  label="Ver Estado"
                  buttonStyle={{
                      borderRadius: 0
                  }}
                  style={{
                    boxShadow: 0,
                    marginTop: 20,
                    marginBottom: 20
                  }}
                />
              </div>
            </div>
            </div>
      </div>


    );
  }

}

export default Mechanic
