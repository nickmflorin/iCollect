import React from 'react';
import PropTypes from 'prop-types'

import { TouchableOpacity, Text, View } from 'react-native'
import { moderateScale as normalize } from 'react-native-size-matters';
import * as style from "../style"

const ButtonStyle = {
    height: normalize(45),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 0,
}

const PrimaryButtonStyle = {
    button : {
        ...ButtonStyle,
        borderColor:"#4A90E2",
        backgroundColor: '#F3F3F3',
        borderWidth: 0.5,
        borderRadius: 0,
        height: normalize(45),
    },
    text : {
        fontSize: 15,
        fontFamily: style.font.family.roboto.regular,
        color: "#4A90E2",
    }
}


export const PrimaryButton = function(props){
	return (
        <View style={props.containerStyle}>
            <TouchableOpacity
              style={PrimaryButtonStyle.button}
              onPress={props.onSubmit}
            >
                <Text style={PrimaryButtonStyle.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
	)
}

const FormButtonStyle = {
    container : {
        marginTop: 20,
    },
    button : {
        ...ButtonStyle,
        borderColor:"#4A90E2",
        backgroundColor: '#F3F3F3',
        borderRadius: 0,
        borderWidth: 0.5,
        height: normalize(45),
    },
    text : {
        fontSize: 15,
        fontFamily: style.font.family.roboto.regular,
        color: "#4A90E2",
    }
}

export const FormButton = function(props){
    return (
        <View style={FormButtonStyle.container}>
            <TouchableOpacity
              style={FormButtonStyle.button}
              onPress={props.onSubmit}
            >
                <Text style={FormButtonStyle.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}