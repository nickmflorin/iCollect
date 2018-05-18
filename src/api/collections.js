import * as firebase from 'firebase';
import { database } from '../config/firebase'
import { validateStrings, snapshotToArray, dictToArray } from '../utils'
import _ from 'underscore'

// Callback Params Are (1) success, (2) error, (3) exists and (4) user
export function getCollections(callback) {
    var user = firebase.auth().currentUser;
    const ref = database.ref().child('collections');

    ref.child(user.uid).once('value')
        .then(function(snapshot) {
        	var collections = snapshotToArray(snapshot)

            _.each(collections, (collection) => {
                if(collection.items){
                    collection.items = dictToArray(collection.items)
                }
            })
            callback(null, collections);
        }).catch((error) => {
        	callback(error, null)
        })
}

// Not Currently Used Since Collection Items Nested in Collection Object
export function getCollectionItems(collection_id, callback) {
    var user = firebase.auth().currentUser;

    // To Do: Make sure collection items exist for collection
    const ref = database.ref().child('collections').child(user.uid).child(collection_id);

    console.log('Getting Collection Items for : ',collection_id)
    ref.once('value').then((snapshot) => {
        // To Do: Have to create an error object here to be properly handled
        if(snapshot.val() === null){
            console.log('Collection Does Not Exist')
            callback('Collection Does Not Exist', null)
        }
        else{
            console.log('Collection Item Exists')
            ref.child('items').once('value')
                .then(function(snapshot) {
                    var items = snapshotToArray(snapshot)
                    callback(null, items);
                }).catch((error) => {
                    callback(error, null)
                })
        }
    }).catch((error) => {
        callback(error, null)
    })
}

// To Do: Data validated in the action call but we might want extra layer of validation
// To Do: Validate that all the keys in the data schema are valid entries.
export function createCollection(data, callback) {
	validateStrings({
        'Description' : data.description,
        'Name' : data.name,
    }, strict=true)

    var user = firebase.auth().currentUser;
    const ref = database.ref().child('collections').child(user.uid);

    var newCollectionKey = ref.push().key;
    ref.child(newCollectionKey).set({ ...data }).then(() => {
        callback(null)
    }).catch(function(error) {
        callback(error)
    })  
}
