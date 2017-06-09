import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionFace from 'material-ui/svg-icons/action/face';
import { browserHistory } from 'react-router';

class MyProfile extends Component {

  render(){
    return (
      <div>
        <RaisedButton
          backgroundColor="#FF5252"
          icon={<ActionFace color="#FFF" />}
          buttonStyle={{
            width: 36,
            borderRadius: 0
          }}
          style={{
            minWidth: 36,
            marginRight: 10,
            boxShadow: 0
          }}
        />
      </div>
    );
  }

}

export default MyProfile
