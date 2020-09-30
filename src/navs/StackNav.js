import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from 'screens/MainScreen';
import BookmarksListScreen from 'screens/BookmarksListScreen';


const Stack = createStackNavigator();
export default function StackNav() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MainScreen">
				<Stack.Screen name="MainScreen" component={MainScreen}
					options={{
						title: 'All News'
					}}
				/>
				<Stack.Screen name="BookmarksList" component={BookmarksListScreen}
					options={{
						title: 'Bookmarks'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
