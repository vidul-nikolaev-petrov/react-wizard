import { SHOW_NAV_NEXT, HIDE_NAV_NEXT } from '../constants/ActionTypes'

const visibilityNavNext = (state = false, action) => {
    switch (action.type) {
    case SHOW_NAV_NEXT:
        return true
    case HIDE_NAV_NEXT:
        return false
    default:
        return state
    }
}

export default visibilityNavNext