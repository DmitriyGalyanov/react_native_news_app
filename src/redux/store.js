import {configureStore} from '@reduxjs/toolkit';

import Reactotron from '../../ReactotronConfig';

import bookmarksReducer from './stateSlices/bookmarksSlice';
import searchParametersReducer from './stateSlices/searchParametersSlice';
import languageReducer from './stateSlices/languageSlice';

export default configureStore({
	reducer: {
		bookmarksSlice: bookmarksReducer,
		searchParametersSlice: searchParametersReducer,
		languageSlice: languageReducer,
	},
	enhancers: [Reactotron.createEnhancer()]
});