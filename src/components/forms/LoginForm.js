import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';
import { Text, View, StyleSheet } from 'react-native';

import { Form } from "./Form"

const LoginFormFields = [
  {
        id: 'email',
        placeholder: "Email Address",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "email"
    },
    {
        id: 'password',
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "password"
    }
]

export class LoginForm extends React.Component {
  render() {
    return (
        <View style={this.props.containerStyle}>
          <Form 
            fields={LoginFormFields}
            buttonTitle='Register'
            inputStyle="light"
            onSubmit={this.props.onSubmit} 
            onError={this.props.onError} 
          />
        </View>
    );
  }
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
}


