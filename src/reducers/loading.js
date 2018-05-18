import { generator } from '../actions/types';

let initialState = false;

export const loading = (state = initialState, action) => {
    switch (action.type) {
        case generator('login').request:
            return true 
        case generator('login').success:
            return false
        case generator('login').error:
            return false
        case generator('logout').request:
            return true 
        case generator('logout').success:
            return false
        case generator('logout').error:
            return false
        case generator('register').request:
            return true 
        case generator('register').success:
            return false
        case generator('register').error:
            return false
        case generator('getCollections').request:
            return true 
        case generator('getCollections').success:
            return false
        case generator('getCollections').error:
            return false
        case generator('createCollection').request:
            return true 
        case generator('createCollection').success:
            return false
        case generator('createCollection').error:
            return false
        default:
            return state;
    }
};

export default loading;