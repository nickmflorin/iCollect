import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { moderateScale as normalize } from 'react-native-size-matters';

import * as style from "../../style"

const CollectionsStyle = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    }
})

const CollectionStyle = StyleSheet.create({
    container : {
        width: '50%',
        aspectRatio: 1,
        padding: 10,
    },
    touchableOpacity : {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(115,115,115,0.05)',
        borderColor: style.color.gray.light,
        borderWidth: 1,
        height: '100%',
        width: '100%',
    },
    text : {
        color: "#4baef7",
    }
})


export class Collection extends React.Component {
    render() {
      return (
        <View style={CollectionStyle.container}>
            <TouchableOpacity
              style={CollectionStyle.touchableOpacity}
              onPress={(evt) => this.props.onClick(evt, this.props.collection)}
            >
                <Text style={CollectionStyle.text}>
                    {this.props.collection.name}
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
}

export class NewCollection extends React.Component {
    render() {
      return (
        <View style={CollectionStyle.container}>
            <TouchableOpacity
              style={CollectionStyle.touchableOpacity}
              onPress={this.props.onClick}
            >
                <Text style={CollectionStyle.text}>
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
}


export class Collections extends React.Component {
    render() {
      return (
        // Clean up the style reference for which text input style to use
        <View style={CollectionsStyle.container}>
            {this.props.collections.map( (collection) => {
                return (
                  <Collection 
                    key={collection.id} 
                    onClick={this.props.onViewCollection} 
                    collection={collection} 
                  />
                )})
            }
            <NewCollection onClick={this.props.onNewCollection}/>
        </View>
      );
    }
}
