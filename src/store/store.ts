import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appsReducer from './appsReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['topFree', 'topPaid']

};

const persistedReducer = persistReducer(persistConfig, appsReducer);

export const store = configureStore({
  reducer: {
    apps: persistedReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export const persistor = persistStore(store);
