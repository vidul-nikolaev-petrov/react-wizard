import { combineReducers } from 'redux'
import { RESET_STORE } from '../constants/ActionTypes'
import navLinks from './navLinks'
import visibilityFormCancel from './filterFormCancel'
import visibilityFormSubmit from './filterFormSubmit'
import visibilityNavNext from './filterNavNext'
import visibilityNavPrev from './filterNavPrev'
import wizForms from './wizForms'

const appReducer = combineReducers({
    wizForms,
    navLinks,
    visibilityFormCancel,
    visibilityFormSubmit,
    visibilityNavNext,
    visibilityNavPrev
})

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE) {
        state = undefined
    }

    return appReducer(state, action)
}

export default rootReducer
