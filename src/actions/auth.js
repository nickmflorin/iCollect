import { AsyncStorage } from 'react-native';

import { ActionHandler } from './types';
import * as api from '../api';
import { auth } from "../config/firebase";
import { validateEmail, validateStrings, validatePassword } from '../utils'

export function checkAuthentication(callback) {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            let isLoggedIn = (user !== null);
            if(isLoggedIn) {
                AsyncStorage.getItem('user').then((user) => {
                    if(user === null){
                        isLoggedIn = false;
                    }
                }).then((res) => {
                    if(isLoggedIn){
                        dispatch({
                            type : 'auth/LOGGED_IN',
                            data : user,
                        })
                    }
                    else{
                        dispatch({
                            type : 'auth/LOGGED_OUT',
                        })
                    }
                    callback(isLoggedIn);
                })
            } 
            else {
                dispatch({
                    type : 'auth/LOGGED_OUT',
                })
                callback(isLoggedIn);
            }
        });
    };
}

export function login(email, password, successCB, errorCB) {
    validateEmail(email, strict=true)
    validatePassword(password, strict=true)

    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('login')

        api.login(email, password, function (success, error, exists, user) {
            if (success) {
                if (exists){
                	handler.success('login', user)
                }
                else{
                    throw new Error('No User Object Was Created for Authentication')
                }
                successCB(user);
            }
            else if (error){
                handler.error('login', error.message)
            	errorCB(error.message)
            }
        });
    };
}

export function logout(successCB, errorCB) {
    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('logout')

        api.logout(function (success, error) {
            if(success) {
                handler.success('logout')
                successCB();
            }
            else if (error){
                handler.error('logout', error.message)
                errorCB(error.message)
            }
        });
    };
}

export function register(email, password, profile, successCB, errorCB) {
    validateEmail(email, strict=true)
    validatePassword(password, strict=true)
    validateStrings({
        'Username' : profile.username,
        'First name' : profile.firstName,
        'Last name' : profile.lastName
    }, strict=true)

    return (dispatch) => {
        var handler = ActionHandler(dispatch)
        handler.request('register')

        api.register(email, password, profile, function(success, error, data) {
            if (success){
                handler.success('register', data)
                successCB(data);
            }
            else if (error){
                handler.error('register', error.message)
                errorCB(error.message)
            }
        });
    };
}

export function createUser(user, successCB, errorCB) {
    return (dispatch) => {
        api.createUser(user, function (success, data, error) {
            if(success) {
                // dispatch({
                // 	type: types.LOGGED_IN, 
                // 	data: user
                // });
                successCB();
            }
            else if(error){
            	errorCB(error)
            }
        });
    };
}

export function resetPassword(data, successCB, errorCB) {
    return (dispatch) => {
        api.resetPassword(data, function (success, data, error) {
            if(success){
            	successCB();
            }
            else if(error){
            	errorCB(error)
            }
        });
    };
}


