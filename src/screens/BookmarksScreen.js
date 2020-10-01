import React from 'react';

import {View, Text} from 'react-native';

import BookmarksList from 'components/BookmarksList';

import { createStackNavigator } from '@react-navigation/stack';

import themeColors from 'theme/colors';


function BookmarksMainScreen() {
	return (
		<View>
			<Text>BookmarksMainScreen</Text>
			<BookmarksList />
		</View>
	)
}


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
		</Stack.Navigator>
	)
}