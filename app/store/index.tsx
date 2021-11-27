// Modules
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
// Reducers && State Interfaces
import cardReducer from '../modules/card/reducer';
const rootReducer = combineReducers({
  card: cardReducer,
});
// Redux Persist
const persistConfig = {
  key: '@CaseStudy',
  storage: AsyncStorage,
  whiteList: [],
  blacklist: ['card'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Store && Persistor
export default () => {
  let store = createStore(persistedReducer, undefined, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return {store, persistor};
};
