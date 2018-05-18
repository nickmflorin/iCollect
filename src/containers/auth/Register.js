import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';

import * as style from "../../style"
import * as actions from '../../actions';

import { RegisterForm } from '../../components'
import Page from '../Page'

const register = actions.register;

export const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 135,
    paddingBottom: 55,
  },
  formContainer : {
    flex: 1,
    width: '100%',
  },
  imageContainer : {
    marginTop: 10,
    marginBottom: 55,
  },
  supplementaryText:{
      textAlign:"center",
      color: style.color.brown.dark,
      marginBottom: 10,
      fontSize: style.font.size.regular,
      fontFamily: style.font.family.roboto.regular,
      flex: 1,
    },
})

export class Register extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        error : null,
      }
      this._onRegisterSuccess = this._onRegisterSuccess.bind(this);
      this._onRegisterError = this._onRegisterError.bind(this);
      this._onRegister = this._onRegister.bind(this);
  }
  // Better more production ready code followed format of including if profile data exists as a param `exists`
  // and then direction to Actions.CompleteProfile(user) if it did not exist.
  _onRegisterSuccess(user){
    if(user){
      Actions.Main()
    }
  }
  _onRegisterError(error){
    this.setState({ error : error })
    Alert.alert(
      'Registration Error',
      error.message || 'There was an error with your registration.',
      [{text: 'OK'}],
      { cancelable: false }
    )
  }
  _onRegister(data){
    const user = { username : data.username, firstName : data.firstName, lastName : data.lastName }
    this.props.register(data.email, data.password, user, this._onRegisterSuccess, this._onRegisterError)
  }
  render() {
    return (
      <Page>
        <View style={RegisterStyle.container}>
          <View style={RegisterStyle.formContainer}>
            <RegisterForm 
              onError={this._onRegisterError}
              onSubmit={this._onRegister}
              error={this.state.error}
            />
          </View>
        </View>
      </Page>
    );
  }
}

export default connect(null, { register })(Register);

