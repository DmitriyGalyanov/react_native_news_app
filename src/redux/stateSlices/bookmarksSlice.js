import {createSlice} from '@reduxjs/toolkit';

export const bookmarksSlice = createSlice({
	name: 'bookmarksData',
	initialState: {
		entries: [],
	},

	reducers: {
		addBookmark: (state, action) => {
			const bookmark = action.payload;
			state.entries.push(bookmark);
		},

		removeBookmark: (state, action) => {
			const bookmarkId = action.payload; //it's url for now

			const bookmarkIndex = state.entries.findIndex((bookmark) => {
				if (bookmark.url === bookmarkId) return true
					else return false;
			});
			if (bookmarkIndex !== -1) {
				state.entries.splice(bookmarkIndex, 1);
			};
		}
	}
});

export const {addBookmark, removeBookmark} = bookmarksSlice.actions;

export const selectBookmarksData = state => state.bookmarksSlice;

export default bookmarksSlice.reducer;