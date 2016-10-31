import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

const enhancer = compose(applyMiddleware(thunk))
const store = createStore(reducer, enhancer)

export default store