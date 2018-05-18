import { AsyncStorage } from 'react-native';
import { generator } from '../actions/types';

let initialState = { 
    isLoggedIn: false, 
    user: null 
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case generator('login').success:

            // Save Token and Data to Async Storage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(action.data)]
            ]);
            return {
                isLoggedIn : true,
                user : action.data
            }

        case generator('register').success:
            // Save Token and Data to Async Storage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(action.data)]
            ]);
            return {
                isLoggedIn : true,
                user : action.data
            }
            
        case generator('login').error:
            return false;

        case generator('register').error:
            return false;

        case generator('logout').success:
            AsyncStorage.multiRemove(['user']);
            return false

        case generator('logout').error:
            return state

        case 'auth/LOGGED_IN':
            // Save Token and Data to Async Storage
            AsyncStorage.multiSet([
                ['user', JSON.stringify(action.data)]
            ]);
            return {
                isLoggedIn : true,
                user : action.data
            }

        case 'auth/LOGGED_OUT':
            AsyncStorage.multiRemove(['user']);
            return initialState

        default:
            return state;
    }
};

export default auth;