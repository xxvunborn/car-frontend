import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import './HomeView.scss'

class HomeView extends Component{
  render() {
    return (
        <div>
          <div className="bg-banner" style={{ backgroundImage: 'url(background-banner.jpg)' }}>
            <div className="container">
              <h1 className="title-banner"><b>Llega a donde quieras</b><br />El día te pertenece</h1>
            </div>
          </div>

          <br /><br /><br />

          <div className="container">
            <div className="row">
              <div className="col-md-4 left-align">
                <h4 className="main-title">Lorem ipsum dolor sit amet</h4>
                <p className="description-title">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam consectetur pulvinar magna eget
                  vestibulum. In iaculis fringilla consequat. Morbi
                  tempor magna ac ex malesuada porta.</p>
              </div>
              <div className="col-md-4 left-align">
                <h4 className="main-title">Lorem ipsum dolor sit amet</h4>
                <p className="description-title">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Etiam consectetur pulvinar magna eget
                  vestibulum. In iaculis fringilla consequat. Morbi
                  tempor magna ac ex malesuada porta.</p>
              </div>
              <div className="col-md-4 left-align">
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
                  <h1 className="title-testimonials">Llega a tu destino aún <br />más rápido</h1>
                  <p className="description-testimonials">Nuestra comunidad de conductores está formada por
                    personas de diferentes orígenes y con experiencias e intereses distintos. Pero es lo que
                    las apasiona lo que en realidad nos cuenta quiénes son.</p>
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

          <br /><br /><br />

          <div className="container">
            <div className="row">
              <div className="col-md-8">
                input
              </div>
              <div className="col-md-4">
                botón
              </div>
            </div>
          </div>

          <br /><br /><br />

        </div>
    )
  }
}

export default HomeView
