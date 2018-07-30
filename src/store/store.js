import { loadState, saveState } from './reducers/localStorage';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';


const testLocalStorage = loadState();   // localStorage

export const store = createStore(
  rootReducer, testLocalStorage, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState())
})

store.subscribe (() =>
  console.log('subscribe to store', store.getState())
)
