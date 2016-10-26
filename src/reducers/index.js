import { combineReducers } from 'redux'
import { combineForms } from 'react-redux-form'
import { RESET_STORE } from '../constants/ActionTypes'
import navLinks from './navLinks'
import visibilityFormCancel from './filterFormCancel'
import visibilityFormSubmit from './filterFormSubmit'
import visibilityNavNext from './filterNavNext'
import visibilityNavPrev from './filterNavPrev'

const initialFormState = [
    {
        firstName: '',
        lastName: ''
    },
    {
        email: ''
    },
    {
        message: '' 
    }
]

const wizForms = combineForms({
    page1: initialFormState[0],
    page2: initialFormState[1],
    page3: initialFormState[2]
}, 'wizForms')

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
