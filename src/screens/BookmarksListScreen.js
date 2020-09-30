import React from 'react';

import {View, Text} from 'react-native';

import BookmarksList from 'components/BookmarksList';


export default function BookmarksListScreen() {

	return (
		<View>
			<Text>BookmarksListScreen</Text>
			<BookmarksList />
		</View>
	)
}