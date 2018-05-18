import { ActionHandler } from './types';
import { validateStrings } from '../utils'
import * as api from '../api';

export function getCollections() {
    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('getCollections')

        api.getCollections( (error, response) => {
            if(error){
                console.log('Error Retrieving Collections')
                console.log(error)
                handler.error('getCollections', error)
            }
            else{
                handler.success('getCollections', response)
            }
        })
    };
}

export function getCollectionItems(collection_id){
    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('getCollectionItems')

        api.getCollectionItems(collection_id, (error, response) => {
            if(error){
                console.log('Error Retrieving Collection Items for Collection',collection_id)
                console.log(error)
                handler.error('getCollectionItems', error)
            }
            else{
                handler.success('getCollectionItems', response)
            }
        })
    };
}

export function createCollection(data, successCB, errorCB) {

    validateStrings({
        'Description' : data.description,
        'Name' : data.name,
    }, strict=true)

    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('createCollection')

        api.createCollection(data, (error) => {
            if(error){
                handler.error('createCollection', error)
                errorCB(error)
            }
            else{
                handler.success('createCollection', data)
                successCB(data)
            }
        })
    };
}
