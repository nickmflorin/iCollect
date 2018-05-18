import * as firebase from 'firebase';
import _ from 'underscore'

import { auth, database } from "../config/firebase";
import { validateEmail, validateStrings, validatePassword } from '../utils'

// Callback Params Are (1) success, (2) error, (3) exists and (4) user
export function login(email, password, callback) {
    validateEmail(email, strict=true)
    validatePassword(password, strict=true)

    auth.signInWithEmailAndPassword(email, password).then(function(user) {
        // Default User Exists to True for Now Even Though Profile Data Might Not Exist
        callback(true, null, true, user)
        //return getUser(user, callback)
    }).catch(function(error) {
        if (callback){
            callback(false, error, false, null)
        }
    })
}

// Callback Params Are (1) success, (2) error
export function logout(callback) {
    auth.signOut().then(function(user) {
        if(callback){
            callback(true, null, null)
        }
    }).catch(function(error) {
        if (callback){
            callback(false, error)
        }
    })  
}

export function register(email, password, profile, callback) {
    validateEmail(email, strict=true)
    validatePassword(password, strict=true)
    validateStrings({
        'Username' : profile.username,
        'First name' : profile.firstName,
        'Last name' : profile.lastName
    })

    // To Do: How to handle situation in which authentication is created
    // for the user but the user object fails to create.
    auth.createUserWithEmailAndPassword(email, password).then(function(user) {
        user.updateProfile({
          displayName: profile.username,
        }).then(function() {
            createUserProfile(user, {
                'firstName' : profile.firstName,
                'lastName' : profile.lastName,
            }, callback)
        }).catch(function(error) {
            console.log('error updating user profile')
            console.log(error)
            callback(false, error, null);
        });
    }).catch(function(error) {
        callback(false, error, null);
    });
}

// To Do: Validate what attributes the profile object has
export function createUserProfile (user, profile, callback) {
    
    const ref = database.ref().child('users');
    ref.child(user.uid).update({ ...profile }).then(() => {
        callback(true, null, user)
    }).catch(function(error) {
        callback(false, error, null)
    })  
}

export function getUser(user, callback) {
    database.ref('users').child(user.uid).once('value')
        .then(function(snapshot) {
            const exists = (snapshot.val() !== null);

            //If the User Exists in the DB, Replace the User Variable with the Returned Snapshot
            if (exists){
                user = snapshot.val();
            }
            callback(true, null, exists, user);
        }).catch(error => callback(false, error, false, null));
}

export function resetPassword(data, callback) {
    const { email } = data;
    auth.sendPasswordResetEmail(email)
        .then((user) => callback(true, null, null))
        .catch((error) => callback(false, null, error));
}

