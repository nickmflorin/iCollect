import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet } from 'react-native';

import { NewCollectionForm } from '../../components'
import Page from '../Page'
import { createCollection, getCollections } from '../../actions';

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
  constructor(props, context){
    super(props, context)
    this._onNewCollection = this._onNewCollection.bind(this)
    this._onNewCollectionError = this._onNewCollectionError.bind(this)
    this._onNewCollectionSuccess = this._onNewCollectionSuccess.bind(this)
  }
  _onNewCollection(data){
    this.props.createCollection(data, this._onNewCollectionSuccess, this._onNewCollectionError)
  }
  _onNewCollectionError(error){
    console.log('Error creating new collection')
    console.log(error)
  }
  _onNewCollectionSuccess(){
    this.props.getCollections()
    Actions.pop()
  }
  render() {
    return (
      <Page>
        <View style={NewCollectionStyle.container}>
          <NewCollectionForm 
            onSubmit={this._onNewCollection}
            onError={this._onNewCollectionError}
          />
        </View>
      </Page>
    );
  }
}

export default connect(null, { createCollection, getCollections })(NewCollection);
