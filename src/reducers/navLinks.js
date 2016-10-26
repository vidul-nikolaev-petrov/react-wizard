import { SET_NAV_NEXT, SET_NAV_PREV } from '../constants/ActionTypes'

const initialState = {
    next: undefined,
    prev: undefined
}

const navLinks = (state = initialState, action) => {
    switch (action.type) {
    case SET_NAV_NEXT:
        return {
            ...state,
            next: action.next
        }
    case SET_NAV_PREV:
        return {
            ...state,
            prev: action.prev,
        }
    default:
        return state
    }
}

export default navLinks