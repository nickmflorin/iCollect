import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import { moderateScale as normalize } from 'react-native-size-matters';

import { CollectionItem, NewCollectionItem } from './Tiles'

const CollectionItemsStyle = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
    }
})

export class CollectionItems extends React.Component {
    render() {
      return (
        // Clean up the style reference for which text input style to use
        <View style={CollectionItemsStyle.container}>
            {this.props.items.map( (item) => {
                return (
                  <CollectionItem
                    key={item.id} 
                    onClick={this.props.onViewCollectionItem} 
                    item={item} 
                  />
                )})
            }
            <NewCollectionItem onClick={this.props.onNewCollectionItem}/>
        </View>
      );
    }
}
