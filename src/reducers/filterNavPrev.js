import { SHOW_NAV_PREV, HIDE_NAV_PREV } from '../constants/ActionTypes'

const visibilityNavPrev = (state = false, action) => {
    switch (action.type) {
    case SHOW_NAV_PREV:
        return true
    case HIDE_NAV_PREV:
        return false
    default:
        return state
    }
}

export default visibilityNavPrev