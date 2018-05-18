import React from 'react';
import PropTypes from 'prop-types'

import { View, StyleSheet, TextInput } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { isEmpty } from '../utils/validate'
import * as style from "../style"

export const FormTextInputStyle = {
    placeholderTextColor : "#9B9B9B",
    textInput : {
        height: '100%',
        color: "#4A4A4A",
        backgroundColor: '#F3F3F3',
        fontSize: 14,
        fontFamily: style.font.family.roboto.light,
        width: style.window.width - 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    container:{
        marginBottom: 20,
        height: normalize(40),
    },
}

// To Do: How do we want to handle errors when errors are noted for a specific field.
export class FormTextInput extends React.Component {
    render() {
      return (
        <View style={FormTextInputStyle.container}>
          <TextInput
            style={FormTextInputStyle.textInput}
            placeholderTextColor={FormTextInputStyle.placeholderTextColor}
            autoCapitalize='none'
            clearButtonMode='while-editing'
            placeholder={this.props.placeholder}
            autoFocus={this.props.autoFocus}
            onChangeText={this.props.onChangeText}
            secureTextEntry={this.props.secureTextEntry}
            keyboardType={this.props.keyboardType}
            value={this.props.value}
          />
        </View>
      );
    }
}

FormTextInput.propTypes = {
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    secureTextEntry: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.string,
}

FormTextInput.defaultProps = {
    style: {},
    containerStyle: {},
    autoFocus: false,
    secureTextEntry: false,
    keyboardType: "default"
}
