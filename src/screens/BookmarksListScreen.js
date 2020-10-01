import React from 'react';

import {View, Text} from 'react-native';

import BookmarksList from 'components/BookmarksList';

import { createStackNavigator } from '@react-navigation/stack';

// import BookmarksListScreen from 'screens/BookmarksListScreen';


const Stack = createStackNavigator();

function BookmarksMainScreen() { // BookmarksMainScreen
	return (
		<View>
			<Text>BookmarksListScreen</Text>
			<BookmarksList />
		</View>
	)
}


export default function BookmarksListScreen() {

	return (
		<Stack.Navigator initialRouteName="BookmarksMainScreen">
			<Stack.Screen name="BookmarksMainScreen" component={BookmarksMainScreen}
				options={{
					title: 'Bookmarks'
				}}
			/>
		</Stack.Navigator>
	)
}