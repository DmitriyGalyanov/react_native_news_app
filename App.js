/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; // to index.js?
import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import MainScreen from 'screens/MainScreen';
import BookmarksListScreen from 'screens/BookmarksListScreen';

// const Stack = createStackNavigator();
const BottomNavTab = createMaterialBottomTabNavigator();

const App: () => React$Node = () => {
	return (
		<NavigationContainer>
			<BottomNavTab.Navigator initialRouteName="MainScreen"
				activeColor="#09dbe3"
				inactiveColor="gray"
				barStyle={{ backgroundColor: 'pink' }}
			>
				<BottomNavTab.Screen name="MainScreen" component={MainScreen}
					options={{
						title: 'Home',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="home" color={color} size={26} />
						)
					}}
				/>
				<BottomNavTab.Screen name="BookmarksList" component={BookmarksListScreen}
					options={{
						title: 'Bookmarks',
						
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons name="bookmark-multiple" color={color} size={26} />
						)
					}}
				/>
			</BottomNavTab.Navigator>
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
