import * as types from '../constants/ActionTypes'

export const showFormCancel = () => ({ type: types.SHOW_FORM_CANCEL })
export const hideFormCancel = () => ({ type: types.HIDE_FORM_CANCEL })

export const showFormSubmit = () => ({ type: types.SHOW_FORM_SUBMIT })
export const hideFormSubmit = () => ({ type: types.HIDE_FORM_SUBMIT })

export const showNavNext = () => ({ type: types.SHOW_NAV_NEXT })
export const hideNavNext = () => ({ type: types.HIDE_NAV_NEXT })

export const showNavPrev = () => ({ type: types.SHOW_NAV_PREV })
export const hideNavPrev = () => ({ type: types.HIDE_NAV_PREV })

export const setNavNext = next => ({
    next,
    type: types.SET_NAV_NEXT
})
export const setNavPrev = prev => ({
    prev,
    type: types.SET_NAV_PREV
})

export const resetStore = () => ({ type: types.RESET_STORE })

