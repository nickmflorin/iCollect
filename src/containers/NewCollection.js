import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet } from 'react-native';

import Page from './Page'

export const NewCollectionStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
})

export class NewCollection extends React.Component {
  render() {
    return (
      <Page>
        <View style={NewCollectionStyle.container}>
        </View>
      </Page>
    );
  }
}

export default connect(null, {})(NewCollection);
