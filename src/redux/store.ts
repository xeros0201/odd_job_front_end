import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import navSlice from './navSlice';
// ...
const rootReducer= combineReducers({
    auth:authSlice,
    nav:navSlice

})
const persistedReducer= persistReducer({
    key: 'root',
    storage: storage,
    whitelist:['auth']
},rootReducer)
export const store = configureStore({
  reducer:persistedReducer,
  middleware:(getDefaultMiddleware) =>
  getDefaultMiddleware<any>({
      serializableCheck:{
          ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      },
  }),

  
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);