import { createStore } from 'redux';
import rootReducer from './modules';

// Check Localstorage
const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});  
export default store;
