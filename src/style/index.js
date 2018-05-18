import { Dimensions, Platform } from 'react-native';
import { font } from './font'
import { color } from './color'

export * from './color'
export * from './font'

export const padding = 8;

export const navbar = {
	height : (Platform.OS === 'ios') ? 64 : 54,
	title : {
		fontSize: font.size.regular, 
		fontFamily: font.family.roboto.bold, 
		color: color.black
	}
}

export const window = {
	width : Dimensions.get('window').width,
	height : Dimensions.get('window').height,
}

export const tabs = {
	color : (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)",
	selectedColor: (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff",
	icon : {
		size: font.size.large, 
		color: (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)", 
		selected: (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff",
	}
}

