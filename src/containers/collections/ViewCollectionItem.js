import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Page from '../Page'
import * as style from '../../style'
import { getCollectionItems } from '../../actions'
import { CollectionItems, CollectionHeader } from '../../components'

// Not currently regetting the collection item from the API since they are already 
// attributed to the passed in props.
export class ViewCollectionItem extends React.Component { 
  render() {
    return (
      <Page>
        <CollectionHeader 
          name={this.props.item.name}
          description="We do not have a description for this yet."
        />
      </Page>
    );
  }
}

export default ViewCollectionItem;
