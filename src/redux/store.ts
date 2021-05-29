import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistReducer, persistStore, } from 'redux-persist';

import reducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
