import { AsyncStorage } from 'react-native';
import { generator } from '../actions/types';

export const collections = (state = [], action) => {
    switch (action.type) {
        case generator('getCollections').success:
            // To Do: Save Token and Data to Async Storage
            return action.data
    
        case generator('getCollections').error:
            return []

        default:
            return state;
    }
};

export const items = (state = [], action) => {
    switch (action.type) {
        case generator('getCollectionItems').success:
            // To Do: Save Token and Data to Async Storage
            return action.data
    
        case generator('getCollectionItems').error:
            return []

        default:
            return state;
    }
};
