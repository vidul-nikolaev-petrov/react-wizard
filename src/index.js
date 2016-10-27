import React from 'react'
import { render } from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './components/App'
import Home from './components/Home'
import WizPage1 from './components/WizPage1'
import WizPage2 from './components/WizPage2'
import WizPage3 from './components/WizPage3'
import Wizard from './containers/Wizard'
import Results from './components/Results'
import NotFoundRoute from './components/NotFoundRoute'
import DevTools from './containers/DevTools'
import './index.css'

const isProduction = process.env.NODE_ENV === 'production'
const rootElement = document.getElementById('root')
const logger = createLogger()

let enhancer

if (isProduction) {
    enhancer = compose(
      applyMiddleware(thunk),
      persistState()
    )
}
else {
    enhancer = compose(
        applyMiddleware(logger),
        applyMiddleware(thunk),
        persistState(),
        DevTools.instrument()
    )
}

const store = createStore(
    reducer,
    enhancer
)

render(
    <Provider store={store}>
      <div className="Root">
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="wizard" component={Wizard}>
              <IndexRoute component={Wizard} />
              <Route path="1" component={WizPage1}
                  name="Wizard step №1" next="/wizard/2" />
              <Route path="2" component={WizPage2}
                  name="Wizard step №2" prev="/wizard/1" next="/wizard/3" />
              <Route path="3" component={WizPage3}
                  name="Wizard step №3" prev="/wizard/2" />
            </Route>
            <Route path="/wizard/results" component={Results} name="Results" />
            <Route path="*" component={NotFoundRoute} />
          </Route>
        </Router>
        {!isProduction && <DevTools />}
      </div>
    </Provider>,
    rootElement
)
