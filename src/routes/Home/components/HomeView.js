import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './HomeView.scss'

class HomeView extends Component{
  render() {
    return (
        <div>
          <div className="bg-banner" style={{ backgroundImage: 'url(background-banner.jpg)' }}>
            <div className="container">
              <h1 className="title-banner"><b>La información de tu auto</b><br />En todo momento</h1>
            </div>
          </div>

          <br /><br /><br />

          <div className="container">
            <div className="row">
              <div className="col-md-4 left-align">
                <img src="ico-robot.png" width="40%" />
                <h4 className="main-title">Lorem ipsum dolor sit amet</h4>
                <p className="description-title">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam consectetur pulvinar magna eget
                  vestibulum. In iaculis fringilla consequat. Morbi
                  tempor magna ac ex malesuada porta.</p>
              </div>
              <div className="col-md-4 left-align">
                <img src="ico-robot.png" width="40%" />
                <h4 className="main-title">Lorem ipsum dolor sit amet</h4>
                <p className="description-title">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam consectetur pulvinar magna eget
                  vestibulum. In iaculis fringilla consequat. Morbi
                  tempor magna ac ex malesuada porta.</p>
              </div>
              <div className="col-md-4 left-align">
                <img src="ico-robot.png" width="40%" />
                <h4 className="main-title">Lorem ipsum dolor sit amet</h4>
                <p className="description-title">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam consectetur pulvinar magna eget
                  vestibulum. In iaculis fringilla consequat. Morbi
                  tempor magna ac ex malesuada porta.</p>
              </div>
            </div>
          </div>

          <br /><br /><br />

          <div className="bg-testimonials" style={{ backgroundImage: 'url(background-testimonials.jpg)' }}>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="title-testimonials">Lorem ipsum dolor<br />sit amet</h1>
                  <p className="description-testimonials">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam consectetur pulvinar magna eget
                    vestibulum. In iaculis fringilla consequat. Morbi
                    tempor magna ac ex malesuada porta.</p>
                  <RaisedButton
                    backgroundColor="#FF5252"
                    labelColor="#FFF"
                    label="Conoce lo nuevo"
                    buttonStyle={{
                      borderRadius: 0
                    }}
                    style={{
                      boxShadow: 0,
                    }}
                    fullWidth={true}
                  />
                </div>
              </div>

            </div>

          </div>



          <div className="box-cities">

            <div className="container">

              <div className="row">
                <div className="col-md-8 left-align">
                  <h2 className="title-cities"><b><span className="red-color">tcars</span> está en Santiago</b><br />y otras ciudades en todo Chile</h2>
                </div>
              </div>

              <br /><br /><br />

              <div className="row">
                <div className="col-md-8 left-align">
                  <input className="input-cities-form" placeholder="Encuentra una ciudad"/>
                    <RaisedButton
                      backgroundColor="#FF5252"
                      icon={<FontIcon className="material-icons" color="#FFF">arrow_forward</FontIcon>}
                      buttonStyle={{
                        borderRadius: 0,
                        width: 50,
                        boxShadow: 0
                      }}
                      style={{
                        minWidth: 50,
                        height: 48,
                        boxShadow: 0,
                        borderRadius: 0
                      }}
                    />
                </div>
              </div>

            </div>

          </div>

        </div>
    )
  }
}

export default HomeView
