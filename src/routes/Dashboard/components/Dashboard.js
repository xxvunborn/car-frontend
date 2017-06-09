import React from 'react'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import './Dashboard.scss'

export const Dashboard = () => (

  <div>
      <div className="container">
        <div className="box-content">
          <div className="row">
            <div className="col-md-4">
              <img src="profile-img.jpg" className="image-profile" />
              <h4 className="margin-none">Gonzalo Herrera Soto</h4>
              <h6 className="font-light">prueba@prueba.cl</h6>
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
              <h4>Automóviles inscritos</h4>
              <h1 className="number-cars font-light">3</h1>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      <div className="container">
        <div className="row">
          <div className="col-md-12 left-align">
            <h4><b className="red-color">Mis</b> automóviles</h4>
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
  </div>
  
)

export default Dashboard
