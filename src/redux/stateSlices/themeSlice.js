import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'themeData',
	initialState: {
		entries: {
			value: 'blue'
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