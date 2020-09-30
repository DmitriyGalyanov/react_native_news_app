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
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import MainScreen from 'screens/MainScreen';
import BookmarksListScreen from 'screens/BookmarksListScreen';

// const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<BottomTab.Navigator initialRouteName="MainScreen">
				<BottomTab.Screen name="MainScreen" component={MainScreen} />
				<BottomTab.Screen name="BookmarksList" component={BookmarksListScreen} />
			</BottomTab.Navigator>
		</NavigationContainer>
	);
	// return (
	// 	<NavigationContainer>
	// 			<Stack.Navigator initialRouteName="MainScreen">
	// 				<Stack.Screen name="MainScreen" component={MainScreen}
	// 					options={{
	// 						title: 'All News'
	// 					}}
	// 				/>
	// 				<Stack.Screen name="BookmarksList" component={BookmarksListScreen}
	// 					options={{
	// 						title: 'Bookmarks'
	// 					}}
	// 				/>
	// 			</Stack.Navigator>
	// 	</NavigationContainer>
	// );
};

export default App;
