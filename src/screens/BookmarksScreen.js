import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BookmarksMainScreen from './bookmarks/BookmarksMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';

import themeColors from 'theme/colors';


export const BookmarksScreenStack = createStackNavigator();

export default function BookmarksScreen() {
	return (
		<BookmarksScreenStack.Navigator initialRouteName="BookmarksMainScreen">
			<BookmarksScreenStack.Screen name="BookmarksMainScreen" component={BookmarksMainScreen}
				options={{
					title: 'Bookmarks',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
			<BookmarksScreenStack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'News Web View (BOOKMARKS)',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
		</BookmarksScreenStack.Navigator>
	)
}