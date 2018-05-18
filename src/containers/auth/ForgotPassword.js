import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import Page from '../Page';
import * as actions from '../../actions';

const register = actions.register;

export class ForgotPassword extends React.Component {
  _onRegister(){
    this.props.register({
      email : this.refs["username-field"].state.text,
      password : this.refs["password-field"].state.text
    }, (data) => {
      console.log('Successful Registration')
      console.log(data)
    }, (err) => {
      console.log('Error Registering')
      console.log(err)
    })
  }
  render() {
    return (
      <Page>
        <Text> Forgot password </Text>
      </Page>
    );
  }
}

export default connect(null, { register })(ForgotPassword);

