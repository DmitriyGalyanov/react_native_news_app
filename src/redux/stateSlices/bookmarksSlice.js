// import {createSlice} from '@reduxjs/toolkit';

// export const bookmarksSlice = createSlice({
// 	name: 'bookmarksData',
// 	initialState: {
// 		entries: [],
// 	},

// 	reducers: {
// 		addBookmark: (state, action) => {
// 			const {bookmark} = action.payload;
// 			state.entries.push(bookmark);
// 		},

// 		removeBookmark: (state, action) => {
// 			const {bookmarkId} = action.payload;
// 			// can I use filter here? (state is a proxy...)
// 			// state.entries
// 			const bookmarkIndex = state.entries.findIndex((bookmark) => {
// 				if (bookmark.id === bookmarkId) return true
// 					else return false;
// 			});
// 			if (bookmarkIndex !== -1) {
// 				state.entries.splice(bookmarkIndex, 1);
// 			};
// 		}
// 	}
// });

// export const {addBookmark, removeBookmark} = bookmarksSlice.actions;

// export const selectBookmarksData = state => state.bookmarksSlice;

// export default bookmarksSlice.reducer;