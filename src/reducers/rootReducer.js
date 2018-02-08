import { combineReducers } from 'redux'
import membersReducer from './members';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    members: membersReducer,
    form: formReducer
})

export default rootReducer
