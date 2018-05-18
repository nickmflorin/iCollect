import { combineReducers } from 'redux';
import { auth } from './auth'
import { loading } from './loading'
import { collections, items } from './collections'

const rootReducer = combineReducers({
    auth,
    loading,
    collections,
    items
})
 
export default rootReducer;