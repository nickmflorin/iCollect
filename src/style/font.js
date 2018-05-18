import { moderateScale as normalize } from 'react-native-size-matters';
import { StyleSheet } from 'react-native'
import { color } from './color'

export const font = {
    size : {
        small: normalize(12),
        regular: normalize(14),
        medium: normalize(16),
        large: normalize(20)
    },
    family : {
        roboto : {
            bold: "RobotoBold",
            medium: "RobotoMedium",
            regular: "RobotoRegular",
            light: "RobotoLight",
        }
    },
}

export const headers = StyleSheet.create({
    h2 : {
        fontSize: 16,
        lineHeight: 18,
        marginBottom: 8,
        color: color.primary,
        fontFamily: font.family.roboto.regular
    },
    h3 : {
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 5,
        color: color.primary,
        fontFamily: font.family.roboto.regular
    }
})

export const text = StyleSheet.create({
    description : {
        fontSize: 12,
        lineHeight: 14,
        color: color.blue,
        fontFamily: font.family.roboto.light
    }
})