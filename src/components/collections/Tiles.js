import React from 'react';
import PropTypes from 'prop-types'

import Icon from 'react-native-vector-icons/FontAwesome';

import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import * as style from "../../style"

const myIcon = (<Icon name="rocket" size={30} color="#900" />)

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

const CollectionItemStyle = StyleSheet.create({
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

export class CollectionItem extends React.Component {
    render() {
      return (
        <View style={CollectionStyle.container}>
            <TouchableOpacity
              style={CollectionStyle.touchableOpacity}
              onPress={this.props.onClick}
            >
                <Text style={CollectionStyle.text}>
                    {this.props.item.name}
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
}

export class NewCollectionItem extends React.Component {
    render() {
      return (
        <View style={CollectionStyle.container}>
            <TouchableOpacity
              style={CollectionStyle.touchableOpacity}
              onPress={this.props.onClick}
            >
                <Text style={CollectionStyle.text}>
                    <Icon name="plus-circle" size={30} color={CollectionStyle.text.color} />
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
}

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
                    <Icon name="plus-circle" size={30} color={CollectionStyle.text.color} />
                </Text>
            </TouchableOpacity>
        </View>
      );
    }
}

