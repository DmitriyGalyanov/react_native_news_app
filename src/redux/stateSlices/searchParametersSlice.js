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
					id: 'abc-news',
					isChosen: true
				},
				'ars-technica': {
					title: 'ARS Technica',
					id: 'ars-technica',
					isChosen: true
				},
				'associated-press': {
					title: 'Associated Press',
					id: 'associated-press',
					isChosen: true
				},
				'axios': {
					title: 'Axios',
					id: 'axios',
					isChosen: true
				},
				'bloomberg': {
					title: 'Bloomberg',
					id: 'bloomberg',
					isChosen: true
				},
				'breitbart-news': {
					title: 'Breitbart News',
					id: 'breitbart-news',
					isChosen: true
				},
				'business-insider': {
					title: 'Business Insider',
					id: 'business-insider',
					isChosen: true
				},
				'buzzfeed': {
					title: 'Buzzfeed',
					id: 'buzzfeed',
					isChosen: true
				},
				'cbc-news': {
					title: 'CBC News',
					id: 'cbc-news',
					isChosen: true
				},
				'cbs-news': {
					title: 'CBS News',
					id: 'cbs-news',
					isChosen: true
				},
				'cnn': {
					title: 'CNN',
					id: 'cnn',
					isChosen: true
				},
				'financial-post': {
					title: 'Financial Post',
					id: 'financial-post',
					isChosen: true
				},
				'fortune': {
					title: 'Fortune',
					id: 'fortune',
					isChosen: true
				},
				'fox-news': {
					title: 'Fox News',
					id: 'fox-news',
					isChosen: true
				},
				'google-news': {
					title: 'Google News',
					id: 'google-news',
					isChosen: true
				},
				'hacker-news': {
					title: 'Hacker News',
					id: 'hacker-news',
					isChosen: true
				},
				'ign': {
					title: 'IGN',
					id: 'ign',
					isChosen: true
				},
				'independent': {
					title: 'Independent',
					id: 'independent',
					isChosen: true
				},
				'entertainment-weekly': {
					title: 'Entertainment Weekly',
					id: 'entertainment-weekly',
					isChosen: true
				},
				'bbc-news': {
					title: 'BBC News',
					id: 'bbc-news',
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
			if(endpoint === 'everything') {
				state.entries.country = '';
				state.entries.category = '';
			};
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