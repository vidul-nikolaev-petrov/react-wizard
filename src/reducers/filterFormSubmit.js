import {SHOW_FORM_SUBMIT, HIDE_FORM_SUBMIT} from '../constants/ActionTypes'

const visibilityFormSubmit = (state = false, action) => {
    switch (action.type) {
    case SHOW_FORM_SUBMIT:
        return true
    case HIDE_FORM_SUBMIT:
        return false
    default:
        return state
    }
}

export default visibilityFormSubmit
