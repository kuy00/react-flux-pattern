import { combineReducers } from 'redux';
import todo from './todo';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'],
};

const rootReducer = combineReducers({
  todo,
});
export default persistReducer(persistConfig, rootReducer);
