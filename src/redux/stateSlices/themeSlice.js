import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'themeData',
	initialState: {
		entries: {
			value: 'cyan-blue',

			themesList: {
				'cyan-blue': {
					title: 'cyan-blue',
					buttonColor: '#2196F3'
				},
				'mint': {
					title: 'mint',
					buttonColor: '#aaf0d1'
				}
			}
		},
	},

	reducers: {
		setTheme: (state, action) => {
			const theme = action.payload;
			state.entries.value = theme;
		},
	}
});

export const {setTheme} = themeSlice.actions;

export const selectThemeData = state => state.themeSlice;

export default themeSlice.reducer;