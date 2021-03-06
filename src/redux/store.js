import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; //for Web
import storage from '@react-native-community/async-storage';

import Reactotron from '../../ReactotronConfig';

import bookmarksReducer from './stateSlices/bookmarksSlice';
import searchParametersReducer from './stateSlices/searchParametersSlice';
import languageReducer from './stateSlices/languageSlice';
import themeReducer from './stateSlices/themeSlice';

const persistConfig = {
	key: 'root',
	storage: storage,
	// whiteList: [],
	// blacklist: ['themeSlice'] //COMMENT AFTER SETUP
}

const rootReducer = combineReducers({
		bookmarksSlice: bookmarksReducer,
		searchParametersSlice: searchParametersReducer,
		languageSlice: languageReducer,
		themeSlice: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
	reducer: persistedReducer,
	enhancers: [Reactotron.createEnhancer()]
});

export const persistor = persistStore(store);