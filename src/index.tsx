import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
//Redux
import { createStore, combineReducers, compose } from "redux"
import { Provider } from "react-redux"
//Reducer
import { todoReducer } from "./redux/reducers/todoReducer"
const rootReducer = combineReducers({ todoReducer })
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
