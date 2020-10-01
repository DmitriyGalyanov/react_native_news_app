import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BookmarksMainScreen from './bookmarks/BookmarksMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';

import themeColors from 'theme/colors';


const Stack = createStackNavigator();

export default function BookmarksScreen() {
	return (
		<Stack.Navigator initialRouteName="BookmarksMainScreen">
			<Stack.Screen name="BookmarksMainScreen" component={BookmarksMainScreen}
				options={{
					title: 'Bookmarks',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
			<Stack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'Bookmarks',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
		</Stack.Navigator>
	)
}