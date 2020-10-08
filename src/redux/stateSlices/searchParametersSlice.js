import {createSlice} from '@reduxjs/toolkit';

export const searchParametersSlice = createSlice({
	name: 'searchParametersData',
	initialState: {
		entries: {
			endpoint: 'everything',
			searchQuery: '',
			country: '',
			category: '',
			language: 'en',
			sortBy: 'relevancy',

			sources: {
				'abc-news': {
					title: 'ABC News',
					id: 'abc-news', //
					isChosen: true
				},
				'ars-technica': {
					title: 'ARS Technica',
					id: 'ars-technica', //
					isChosen: true
				},
				'associated-press': {
					title: 'Associated Press',
					id: 'associated-press', //
					isChosen: true
				},
				'axios': {
					title: 'Axios',
					id: 'axios', //
					isChosen: true
				}
			}
		},
	},
	reducers: {
		editSearchQuery: (state, action) => {
			const query = action.payload;
			if (!query) {
				state.entries.endpoint = 'everything';
				state.entries.country = '';
				state.entries.category = '';
			}
			state.entries.searchQuery = query;
		},

		changeEndpoint: (state, action) => {
			const endpoint = action.payload;
			if(endpoint === 'everything') state.entries.country = '';
			state.entries.endpoint = endpoint;
		},

		changeCountry: (state, action) => {
			const country = action.payload;
			state.entries.country = country;
		},

		changeCategory: (state, action) => {
			const category = action.payload;
			state.entries.category = action.payload;
		},

		changeLanguage: (state, action) => {
			const language = action.payload;
			state.entries.language = language;
		},

		changeSortBy: (state, action) => {
			const sortBy = action.payload;
			state.entries.sortBy = sortBy;
		},

		toggleSource: (state, action) => {
			const sourceId = action.payload;
			state.entries.sources[sourceId].isChosen =
				!state.entries.sources[sourceId].isChosen;
		}
	}
});

export const {editSearchQuery,
	changeEndpoint,
	changeCountry,
	changeCategory,
	changeLanguage,
	changeSortBy,
	toggleSource} = searchParametersSlice.actions;

export const selectSearchParametersData = state => state.searchParametersSlice;

export default searchParametersSlice.reducer;