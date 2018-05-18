import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';

import { Text, View, StyleSheet } from 'react-native';
import { Form } from "./Form"

const RegisterFormFields = [
  {
        id: 'firstName',
        placeholder: "First Name",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    },
    {
        id: 'lastName',
        placeholder: "Last Name",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    },
    {
        id: 'email',
        placeholder: "Email Address",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "email"
    },
    {
        id: 'username',
        placeholder: "Username",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    },
    {
        id: 'password',
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "password"
    },
    {
        id: 'confirm_password',
        placeholder: "Confirm Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "confirm_password"
    }
]

export class RegisterForm extends React.Component {
  render() {
    return (
        <View style={this.props.containerStyle}>
          <Form 
            buttonTitle='Register'
            inputStyle="dark"
            fields={RegisterFormFields} 
            onSubmit={this.props.onSubmit} 
            onError={this.props.onError} 
          />
        </View>
    );
  }
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
}


