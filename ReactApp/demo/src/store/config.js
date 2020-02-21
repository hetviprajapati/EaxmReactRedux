import { applyMiddleware,compose,createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer/index.js';


const composeEnhancer = 
    typeof window==='object' &&  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose ;

const enhanser=composeEnhancer(
    applyMiddleware(thunk)
)

export default createStore(rootReducer,enhanser);