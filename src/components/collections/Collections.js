import React from 'react';
import PropTypes from 'prop-types'

import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import { moderateScale as normalize } from 'react-native-size-matters';
import { Collection, NewCollection } from './Tiles'

const CollectionsStyle = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    }
})

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
