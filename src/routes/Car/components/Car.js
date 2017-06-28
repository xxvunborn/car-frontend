import React, {Component} from 'react'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './Car.scss'

const customContentStyle = {
  width: '50%',
  maxWidth: 'none',
};

class Car extends Component{

  constructor(){
    super();
    this.state = {
      value: 1,
      open: false,
      openModalIssue: false,
      newCar: {
        plate: "",
        brand: "",
        model: "",
        year: "",
        fuel: "",
        transmission: "",
        usage: ""
      },
      cars: {brand: "hola"}
    }
  };

  handleModalAddCar = () => {
    this.setState({open: true});
  };

  handleCloseModalAddCar = () => {
    this.setState({
      open: false,
      newCar: {
        plate: "",
        brand: "",
        model: "",
        year: "",
        fuel: "",
        transmission: "",
        usage: ""
      }
    });
  };

  handleModalAddIssue = () => {
    this.setState({openModalIssue: true})
  };

  handleCloseModalAddIssue = () => {
    this.setState({openModalIssue: false})
  };

  handleChangeValue = (e) => {
    var c = this.state.newCar
    if(c.hasOwnProperty(e.target.name)) {
      if(e.target.name === "year" || e.target.name === "usage")
        c[e.target.name] = parseInt(e.target.value)
      else
        c[e.target.name] = e.target.value
      this.setState({newCar: c})
    }
  };

  formVerification = () => {
    if(this.state.newCar.plate === "" || this.state.newCar.brand === "" || this.state.newCar.model === "" || this.state.newCar.year === "" || this.state.newCar.fuel === "" || this.state.newCar.transmission === "" || this.state.newCar.usage === ""){
      return false
    }
    return true
  };

  isDisabled = () => {
    if (!this.formVerification()){
      return true
    }
    return false
  };

  handleSubmitAddCar = () => {
    fetch('https://automotive-api.herokuapp.com/api/clients/cars', {
          method: 'POST',
          headers: {
            "Authorization": "Bearer " + sessionStorage.jwtToken,
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "car": this.state.newCar
          }),
    })
    .then(resp => {
      if(resp.status === 201){
        console.log('correcto')
      }else{
        console.log('incorrecto')
      }
      console.log(this.state.newCar)
    })
  };

  handleFetchUserCars = () => {
    fetch('https://automotive-api.herokuapp.com/api/clients/cars', {
          method: 'POST',
          headers: {
            "Authorization": "Bearer " + sessionStorage.jwtToken,
            "content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            "car": this.state.newCar
          }),
    })
    .then(resp => {
      if(resp.status === 201){
        console.log('correcto')
      }else{
        console.log('incorrecto')
      }
      console.log(this.state.newCar)
    })
  };

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
            console.log(response)
            this.setState({
              cars: response.data.data.cars
            });
          }
      })
    })
  }

  render(){
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
        onTouchTap={this.handleCloseModalAddCar}
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
        onClick={this.handleSubmitAddCar}
      />,
    ];

    const actionsIssue = [
      <RaisedButton
        label="Cancelar"
        buttonStyle={{
          borderRadius: 0,
        }}
        style={{
          boxShadow: 0,
          marginRight: 10
        }}
        onTouchTap={this.handleCloseModalAddIssue}
      />,
      <RaisedButton
        backgroundColor="#FF5252"
        labelColor="#FFF"
        label="Enviar"
        buttonStyle={{
          borderRadius: 0
        }}
        style={{
          boxShadow: 0
        }}
      />,
    ];

    const items = [
      <MenuItem key={1} value={1} primaryText="Baja" />,
      <MenuItem key={2} value={2} primaryText="Media" />,
      <MenuItem key={3} value={3} primaryText="Alta" />,
    ];

    var cars =[]
      console.log(this.state.cars)
      for (var x in this.state.cars){
        cars.push(
              <div className="col-md-4">
                <img src="car-1.png" className="image-car" />
                <h5 className="font-light">{this.state.cars[x].brand}</h5>
                <h6><b className="red-color">Patente</b>{this.state.cars[x].plate}</h6>
                  <RaisedButton
                    onTouchTap={this.handleModalAddIssue}
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
                  <Dialog
                    title="AGREGAR FALLA"
                    actions={actionsIssue}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.openModalIssue}
                    onRequestClose={this.handleCloseModalAddCar}
                    className="text-center"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <TextField
                          floatingLabelText="Falla"
                          hintText="Escriba una descripción de su falla"
                          fullWidth={true}
                          floatingLabelStyle={{color: '#4c5661'}}
                          underlineFocusStyle={{borderColor: '#000'}}
                          name="falla"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 left-align">
                        <SelectField
                          value={this.state.value}
                          onChange={this.handleChange}
                          floatingLabelText="Prioridad de falla"
                          selectedMenuItemStyle={{color: '#FF5252'}}
                          floatingLabelStyle={{color: '#4c5661'}}
                          underlineFocusStyle={{borderColor: '#000'}}
                        >
                          {items}
                        </SelectField>
                      </div>
                      <div className="col-md-6 left-align">
                        <SelectField
                          floatingLabelText="Difícultad de falla"
                          value={this.state.value}
                          onChange={this.handleChange}
                          selectedMenuItemStyle={{color: '#FF5252'}}
                          floatingLabelStyle={{color: '#4c5661'}}
                          underlineFocusStyle={{borderColor: '#000'}}
                        >
                          {items}
                        </SelectField>
                      </div>
                    </div>
                  </Dialog>
              </div>
            )
      }

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
              <Dialog
                title="AGREGAR AUTOMÓVIL"
                actions={actions}
                modal={false}
                contentStyle={customContentStyle}
                open={this.state.open}
                onRequestClose={this.handleCloseModalAddCar}
                className="text-center"
              >
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Patente"
                      hintText="Escriba patente del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="plate"
                      value={this.state.newCar.plate}
                      onChange={this.handleChangeValue}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Año"
                      hintText="Escriba año del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="year"
                      value={this.state.newCar.year}
                      onChange={this.handleChangeValue}
                      type="number"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Marca"
                      hintText="Escriba marca del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="brand"
                      value={this.state.newCar.brand}
                      onChange={this.handleChangeValue}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Modelo"
                      hintText="Escriba modelo del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="model"
                      value={this.state.newCar.model}
                      onChange={this.handleChangeValue}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Combustible"
                      hintText="Escriba combustible del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="fuel"
                      value={this.state.newCar.fuel}
                      onChange={this.handleChangeValue}
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Transmisión"
                      hintText="Escriba transmisión del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="transmission"
                      value={this.state.newCar.transmission}
                      onChange={this.handleChangeValue}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      floatingLabelText="Uso"
                      hintText="Escriba uso aproximado del automóvil"
                      fullWidth={true}
                      floatingLabelStyle={{color: '#4c5661'}}
                      underlineFocusStyle={{borderColor: '#000'}}
                      name="usage"
                      value={this.state.newCar.usage}
                      onChange={this.handleChangeValue}
                      type="number"
                    />
                  </div>
                </div>

              </Dialog>
            </div>
            <div className="col-md-12">
              <hr />
            </div>
          </div>
        </div>

          <div className="container">
            <div className="row">
              { cars }
            </div>
          </div>
        <br />

        <br /><br /><br />

      </div>
    );
  }

}

export default Car
