import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers' //como el archivo se llama 'index.js' no es necesario importarlo como 'reducers/index.js'

const store = createStore(
    reducer,
    //apply middleware se requero proque vamos a usar thunk
    compose(
        applyMiddleware(thunk),
         typeof window === 'object' && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" ?
             window.__REDUX_DEVTOOLS_EXTENSION__(): f => f)
);

export default store
