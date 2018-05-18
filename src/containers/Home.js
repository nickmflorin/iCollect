import React from 'react';
import { connect } from 'react-redux';
import { Router, Actions, ActionConst, Scene, Stack } from 'react-native-router-flux';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

import { PrimaryButton, Collections } from '../components'
import Page from './Page'
import { logout, getCollections } from '../actions'
import NewCollection from './NewCollection'
import ViewCollection from './ViewCollection'

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
})

export class ViewCollections extends React.Component {
  render(){
    console.log('Rendering ViewCollections')
    return (
      <View>
        <Collections collections={this.props.collections} />
        <PrimaryButton
          title="Logout"
          containerStyle={{width: '100%', marginTop: 15}}
          onSubmit={this._onLogout.bind(this)}
        />
      </View>
    )
  }
}

export class Home extends React.Component {
  async componentDidMount(){
    this.props.getCollections()
  }
  componentWillReceiveProps(props){
    console.log(props.collections)
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
  render() {
    return (
      <Page>
        <View style={HomeStyle.container}>

              <Stack key="Collections" initial={true}>
                  <Scene key="ViewCollections" component={ViewCollections} collections={this.props.collections} title="Your Collections" initial={true} hideNavBar/>
                  <Scene key="NewCollection" component={NewCollection} title="New Collection" back/>
                  <Scene key="ViewCollection" component={ViewCollection} title="Collection" back/>
              </Stack>

        </View>
      </Page>
    );
  }
}

const StateToProps = (state, ownProps) => {  
  return {
    collections : state.collections,
  }
};

export default connect(StateToProps, { logout, getCollections })(Home);
