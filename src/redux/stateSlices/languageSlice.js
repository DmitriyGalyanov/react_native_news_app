import {createSlice} from '@reduxjs/toolkit';

export const languageSlice = createSlice({
	name: 'languageData',
	initialState: {
		entries: {
			value: 'en'
		},
	},

	reducers: {
		setLanguage: (state, action) => {
			const language = action.payload;
			state.entries.value = language;
		},
	}
});

export const {setLanguage} = languageSlice.actions;

export const selectLanguageData = state => state.languageSlice;

export default languageSlice.reducer;