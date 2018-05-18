import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Page from '../Page'
import * as style from '../../style'
import { getCollectionItems } from '../../actions'
import { CollectionItems, CollectionHeader } from '../../components'

// Not currently regetting the collection items from the API since they are already 
// attributed to the collection.
// We might decide that we want to also reget the items when the scene is loaded.
export class ViewCollection extends React.Component { 
  async componentDidMount(){
    //this.props.getCollectionItems(this.props.collection.id)
  }
  _onViewCollectionItem(evt, item){
    Actions.ViewCollectionItem({
      item : item
    })
  }
  render() {
    return (
      <Page>
        <CollectionHeader 
          name={this.props.collection.name}
          description={this.props.collection.description}
        />
        <CollectionItems 
          onViewCollectionItem={this._onViewCollectionItem}
          items={this.props.collection.items || []} 
        />
      </Page>
    );
  }
}

const StateToProps = (state, ownProps) => {  
  return {
    items : state.items,
  }
};

export default connect(StateToProps, { getCollectionItems })(ViewCollection);
