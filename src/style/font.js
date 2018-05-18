import { moderateScale as normalize } from 'react-native-size-matters';

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
    }
}