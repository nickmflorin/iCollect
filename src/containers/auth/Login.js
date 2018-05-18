import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { View, Image, StyleSheet, Text, Alert } from 'react-native';

import * as style from "../../style"
import * as actions from '../../actions';

import { LoginForm } from '../../components'
import Page from '../Page'

const login = actions.login;

export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 135,
    paddingBottom: 55,
  },
  formContainer : {
    width: '100%',
    marginBottom: 15,
    marginTop: 25,
  },
  imageContainer : {
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

export class Login extends React.Component {
  constructor(props, context) {
      super(props, context);
      this._onLogin = this._onLogin.bind(this);
      this._onLoginSuccess = this._onLoginSuccess.bind(this);
      this._onLoginError = this._onLoginError.bind(this);
  }
  // Better more production ready code followed format of including if profile data exists as a param `exists`
  // and then direction to Actions.CompleteProfile(user) if it did not exist.
  _onLoginSuccess(user){
    if(user){
      Actions.Main()
    }
  }
  _onLoginError(error){
    var errorMessage = 'There was an error logging you in.'
    if(error.detail !== 'general'){
        errorMessage = error.message
    }
    Alert.alert(
      'Login Error',
      errorMessage,
      [{text: 'OK'}],
      { cancelable: false }
    )
  }
  _onLogin(data){
    const { email, password } = data;
    console.log('logging in')
    console.log(email, password)
    this.props.login(email, password, this._onLoginSuccess, this._onLoginError)
  }
  _onForgotPassword(){
    Actions.ForgotPassword()
  }
  _onRegister(){
    Actions.Register()
  }
  render() {
    return (
      <Page gradient={true}>
        <View style={LoginStyle.container}>
          <View style={LoginStyle.imageContainer}>
            <Image source={require('../img/Logo.png')} />
          </View>
          <LoginForm 
            containerStyle={LoginStyle.formContainer}
            onSubmit={this._onLogin}
            onError={this._onLoginError}
          />
          <View style={{flexDirection:"row"}}>
            <Text style={LoginStyle.supplementaryText} onPress={this._onRegister}>
                Create an account
            </Text>
            <Text style={LoginStyle.supplementaryText} onPress={this._onForgotPassword}>
                Forgot password?
            </Text>
          </View>
        </View>
      </Page>
    );
  }
}

export default connect(null,  { login })(Login);