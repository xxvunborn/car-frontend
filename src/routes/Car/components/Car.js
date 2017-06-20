import React, {Component} from 'react'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './Car.scss'

class Car extends Component{

  handleModalAddCar = () => {
    alert('agregar Automovil')
  }

  render(){
    return(
      <div>

        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-4 left-align">
              <h4><b className="red-color">Mis</b> automóviles</h4>
            </div>
            <div className="col-md-8 right-align">
              <RaisedButton
                onTouchTap={this.handleModalAddCar}
                backgroundColor="#FF5252"
                labelColor="#FFF"
                label="Agregar Automóvil"
                buttonStyle={{
                  borderRadius: 0
                }}
                style={{
                  boxShadow: 0,
                }}
              />
            </div>
            <div className="col-md-12">
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
                backgroundColor="#000"
                labelColor="#FFF"
                label="Agregar Falla"
                buttonStyle={{
                    borderRadius: 0
                }}
                style={{
                  boxShadow: 0,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 5
                }}
              />
            </div>
            <div className="col-md-4">
              <img src="car-2.png" className="image-car" />
              <h5 className="font-light">BMW Serie 1</h5>
              <h6><b className="red-color">Patente</b> CC NM 26</h6>
              <RaisedButton
                backgroundColor="#000"
                labelColor="#FFF"
                label="Agregar Falla"
                buttonStyle={{
                    borderRadius: 0
                }}
                style={{
                  boxShadow: 0,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 5
                }}
              />
            </div>
            <div className="col-md-4">
              <img src="car-3.png" className="image-car" />
              <h5 className="font-light">BMW Serie 6 Convertible</h5>
              <h6><b className="red-color">Patente</b> DD KS 19</h6>
              <RaisedButton
                backgroundColor="#000"
                labelColor="#FFF"
                label="Agregar Falla"
                buttonStyle={{
                    borderRadius: 0
                }}
                style={{
                  boxShadow: 0,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 5
                }}
              />
              </div>
            </div>
          </div>

        <br /><br /><br />

      </div>
    );
  }

}

export default Car
