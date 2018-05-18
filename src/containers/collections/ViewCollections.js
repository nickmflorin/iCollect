import React from 'react';
import { connect } from 'react-redux';
import { Router, Actions, ActionConst, Scene, Stack } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

import * as actions from '../../actions';
import { PrimaryButton, Collections } from '../../components'
import Page from '../Page'

const getCollections = actions.getCollections;
const logout = actions.logout;

export const ViewCollectionsStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
})

export class ViewCollections extends React.Component {
  async componentDidMount(){
    this.props.getCollections()
  }
  componentWillReceiveProps(props){
    console.log(props.collections)
  }
  // To Do: Maybe just pass the collection id in and have the new scene
  // reget the collection from the API.
  _onViewCollection(evt, collection){
    Actions.ViewCollection({
      collection : collection
    })
  }
  _onNewCollection(){
    console.log('Clicked new collection')
    Actions.NewCollection()
  }
  _onLogoutSuccess(){
    Actions.reset("Auth")
  }
  _onLogoutError(error){
    console.log('There was an error logging out!')
    console.log(error)
  }
  _onLogout(){
    this.props.logout(this._onLogoutSuccess.bind(this), this._onLogoutError.bind(this))
  }
  render(){
    console.log('Rendering ViewCollections')
    return (
      <Page>
        <View style={ViewCollectionsStyle.container}>
          <Collections 
            collections={this.props.collections} 
            onNewCollection={this._onNewCollection}
            onViewCollection={this._onViewCollection}
          />
          <PrimaryButton
            title="Logout"
            containerStyle={{width: '100%', marginTop: 15}}
            onSubmit={this._onLogout.bind(this)}
          />
        </View>
      </Page>
    )
  }
}

const StateToProps = (state, ownProps) => {  
  return {
    collections : state.collections,
  }
};

export default connect(StateToProps, { logout, getCollections })(ViewCollections);
