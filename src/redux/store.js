import {configureStore} from '@reduxjs/toolkit';

import bookmarksReducer from './stateSlices/bookmarksSlice';
import searchParametersReducer from './stateSlices/searchParametersSlice';

export default configureStore({
	reducer: {
		bookmarksSlice: bookmarksReducer,
		searchParametersSlice: searchParametersReducer
	},
});