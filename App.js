/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // to index.js?
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from 'screens/MainScreen';
import BookmarksListScreen from 'screens/BookmarksListScreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
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
	);
};

export default App;
