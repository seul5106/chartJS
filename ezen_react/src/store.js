import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { tab1AxiosSlice } from './slices/tab1AxiosSlice';
import { tab2AxiosSlice } from './slices/tab2AxiosSlice';
import { tab3AxiosSlice } from './slices/tab3AxiosSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        tab1Axios: tab1AxiosSlice.reducer,
        tab2Axios : tab2AxiosSlice.reducer,
        tab3Axios : tab3AxiosSlice.reducer
    },

    middleware: [...getDefaultMiddleware({serializableCheck: false}), logger],
    devTools: true
})

export default store;