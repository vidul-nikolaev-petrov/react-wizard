import { SHOW_FORM_CANCEL, HIDE_FORM_CANCEL } from '../constants/ActionTypes'

const visibilityFormCancel = (state = true, action) => {
    switch (action.type) {
    case SHOW_FORM_CANCEL:
        return true
    case HIDE_FORM_CANCEL:
        return false
    default:
        return state
    }
}

export default visibilityFormCancel
