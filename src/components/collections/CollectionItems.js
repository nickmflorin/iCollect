import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import { moderateScale as normalize } from 'react-native-size-matters';

import * as style from "../../style"

const CollectionItemPadding = 10;
const CollectionItemDetailHeight = 50;

const CollectionItemsStyle = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    }
})

const CollectionItemDetailStyle = StyleSheet.create({
    container : {
        padding: 5,
        height: CollectionItemDetailHeight,
        width: '100%',
    },
})

const CollectionItemStyle = StyleSheet.create({
    wrapper : {
        padding: CollectionItemPadding,
        width: 0.5*(style.window.width),
        height: 0.5*(style.window.width) + CollectionItemDetailHeight,
    },
    container : {
        flex: 1,
        backgroundColor: style.color.white,
        ...style.border.gray,
        ...style.center,
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        aspectRatio: 1.0,
        position: 'relative',
        ...style.center,
    },
})

export class CollectionItemDetail extends React.Component {
    render(){
        return (
            <View style={CollectionItemDetailStyle.container}>
                <Text style={style.headers.h3}>
                    {this.props.name}
                </Text>
                <Text style={style.text.description}>
                    {this.props.date}
                </Text>
            </View>
        )
    }
}

export class CollectionItem extends React.Component {
    render() {
      return (
        <View style={CollectionItemStyle.wrapper}>
            <TouchableOpacity
              style={CollectionItemStyle.container}
              onPress={this.props.onClick}
            >
                <View style={CollectionItemStyle.imageContainer}>
                    <Image resizeMode="cover" style={style.full_size} source={require('../../../assets/img/ImagePlaceholder.png')} />
                </View>
                <CollectionItemDetail 
                    name={this.props.item.name}
                    date="September 20, 2015"
                />
            </TouchableOpacity>
        </View>
      );
    }
}

export class CollectionItems extends React.Component {
    render() {
      return (
        // Clean up the style reference for which text input style to use
        <View style={CollectionItemsStyle.container}>
            {this.props.items.map( (item) => {
                return (
                  <CollectionItem
                    key={item.id} 
                    onClick={(evt) => this.props.onViewCollectionItem(evt, item)} 
                    item={item} 
                  />
                )})
            }
        </View>
      );
    }
}
