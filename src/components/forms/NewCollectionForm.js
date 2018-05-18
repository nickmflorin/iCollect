import React from 'react';
import PropTypes from 'prop-types'
import _ from 'underscore';

import { Text, View, StyleSheet } from 'react-native';

import { color } from '../../style'
import { Form } from "./Form"

const NewCollectionFormFields = [
  {
      id: 'name',
      placeholder: "Name",
      autoFocus: true,
      secureTextEntry: false,
      value: "",
      type: "text"
  },
  {
      id: 'description',
      placeholder: "Description",
      autoFocus: false,
      secureTextEntry: false,
      value: "",
      type: "text"
  }
]

export class NewCollectionForm extends React.Component {
  render() {
    return (
        <View style={this.props.containerStyle}>
          <Form 
            fields={NewCollectionFormFields} 
            onSubmit={this.props.onSubmit} 
            onError={this.props.onError} 
            buttonTitle="Create Collection"
          />
        </View>
    );
  }
}

NewCollectionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
}

