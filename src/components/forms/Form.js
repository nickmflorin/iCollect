import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';
import { Text, View, StyleSheet } from 'react-native';

import { isEmpty, validateForm, FormError } from '../../utils'
import { FormTextInput } from "../Inputs"
import { FormButton } from '../Buttons'

export class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.createState(
      this.props.fields, 
    );
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // Initialize state based on fields and the associated error (if any)
  // Currently not using specific errors for each field, but we are using
  // a general login error alert.  
  createState(fields) {
    const state = {};
    fields.forEach((field) => {
        let { id, type, value } = field;
        state[id] = { 
          type: type, 
          value: value,
        };
    })
    return state;
  }
  // Validates data in form before proceeding
  onSubmit() {
    const fields = this.state;
    const errors = validateForm(fields);

    if(errors){
      // To Do: Better and more easily readable grouping of errors.
      if(errors.length !== 1){
        console.log('Warning: multiple errors noticed but only referencing the first error.')
        const err = new FormError(null, 'general')
        this.props.onError(err)
      }
      else{
        const err = errors[0]
        this.props.onError(err)
      }
    }
    else {
        const extracted = {};
        var self = this 
        Object.keys(fields).forEach(function(key) {
            extracted[key] = self.state[key].value;
        });
        this.props.onSubmit(extracted);
    }
  }
  // Store field values in state whenever they are updated
  onChange(id, text) {
    const state = this.state;
    state[id]['value'] = text;
    this.setState(state);
  }
  render() {
    return (
        <View>
          {this.props.fields.map((data, idx) => {
            return (
                <FormTextInput 
                  key={idx}
                  placeholder={data.placeholder}
                  autoFocus={data.autoFocus}
                  onChangeText={(text) => this.onChange(data.id, text)}
                  secureTextEntry={data.secureTextEntry}
                  keyboardType={data.keyboardType}
                  value={this.state[data.id].value}
                  error={this.state[data.id].error}
                />
            )})
          }
          <FormButton
            title={this.props.buttonTitle}
            onSubmit={this.onSubmit}
          />
        </View>
    );
  }
}

Form.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
}

