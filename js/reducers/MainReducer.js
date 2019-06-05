import { combineReducers } from 'redux'
import AxiosDemoReducer from './AxiosDemoReducer'
import AddReducer from './AddReducer'

export default combineReducers({
    AxiosDemoReducer,
    AddReducer
})