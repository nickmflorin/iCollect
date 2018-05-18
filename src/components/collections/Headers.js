import React from 'react';
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import * as style from '../../style'

const CollectionHeaderStyle = StyleSheet.create({
    container : {
    	width: '100%',
        padding: 10,
    },
})

export class CollectionHeader extends React.Component {
	render(){
		return (
			<View style={CollectionHeaderStyle.container}>
				<Text style={style.headers.h2}>
					{this.props.name}
				</Text>
				<Text style={style.text.description}>
					{this.props.description}
				</Text>
			</View>
		)
	}
}
