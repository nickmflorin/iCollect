import React from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, StyleSheet } from 'react-native';

import Page from '../Page'
import * as style from '../../style'
import { getCollectionItems } from '../../actions'
import { CollectionItems } from '../../components'

export const ViewCollectionStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  text : {
      fontSize: 14,
      fontFamily: style.font.family.roboto.regular,
      color: "#4A90E2",
  },
  description : {
      fontSize: 12,
      fontFamily: style.font.family.roboto.light,
      color: "#4A90E2",
  }
})

export class ViewCollection extends React.Component {
  // Not currently used since the collection items are already attributed to the collection.
  // We might decide that we want to also reget the items when the scene is loaded.
  async componentDidMount(){
    //this.props.getCollectionItems(this.props.collection.id)
  }
  _onNewCollectionItem(){
    console.log('New Collection Item')
  }
  _onViewCollectionItem(){
    console.log('View Collection Item')
  }
  render() {
    return (
      <Page>
        <View style={ViewCollectionStyle.container}>
          <Text style={ViewCollectionStyle.header}> 
            {this.props.collection.name}
          </Text>
          <Text style={ViewCollectionStyle.description}> 
            {this.props.collection.description}
          </Text>
        </View>
        <CollectionItems 
          onViewCollectionItem={this._onViewCollectionItem}
          onNewCollectionItem={this._onNewCollectionItem}
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
