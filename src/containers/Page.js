import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import * as style from "../style"
import { logout } from '../actions'

const PageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.color.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  loader : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export class Page extends React.Component {
  render() {
    return (
      <View style={PageStyle.container}>
          <ActivityIndicator 
            size="small" 
            style={PageStyle.loader} 
            animating={this.props.loading} 
            color={style.color.activity} 
          />

          {this.props.gradient && 
            <LinearGradient colors={[style.color.brown.light, style.color.brown.tint]} style={PageStyle.linearGradient}>
                {this.props.children}
            </LinearGradient>
          }
          {!this.props.gradient && 
            this.props.children
          }
      </View>
    );  
  }
}

const StateToProps = (state, ownProps) => {  
  return {
    loading : state.loading,
  }
};

export default connect(StateToProps, { logout })(Page);
