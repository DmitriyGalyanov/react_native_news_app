import {createSlice} from '@reduxjs/toolkit';

export const searchParametersSlice = createSlice({
	name: 'searchParametersData',
	initialState: {
		entries: {
			// endpoint: 'top-headlines',
			// searchQuery: '',
			// country: 'us',
			// category: '',
			// sortBy: 'publishedAt',
			endpoint: 'everything',
			searchQuery: 're',
			country: '',
			category: '',
			sortBy: 'relevancy',
		},
	},
	// top-headlines (endpoint) doesn't work with sortBy
	// everything (endpoint) can't be mixed with country and category?

	// this section needs tests
	reducers: {
		editSearchQuery: (state, action) => {
			const query = action.payload;
			if (!query) state.entries.endpoint = 'top-headlines';
			state.entries.searchQuery = query;
		},

		changeEndpoint: (state, action) => {
			const endpoint = action.payload;
			if(endpoint === 'everything') state.entries.country = '';
			state.entries.endpoint = endpoint;
		},

		changeCountry: (state, action) => {
			//has to be disabled if endpoint === everything
			const country = action.payload;
			state.entries.country = country;
		},

		changeSortBy: (state, action) => {
			//has to be disabled if endpoint === top-headlines
			const sortBy = action.payload;
			state.entries.sortBy = sortBy;
		}
	}
});

export const {addBookmark, removeBookmark} = searchParametersSlice.actions;

export const selectSearchParametersData = state => state.searchParametersSlice;

export default searchParametersSlice.reducer;