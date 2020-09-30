import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MainScreen from 'screens/MainScreen';
import BookmarksListScreen from 'screens/BookmarksListScreen';

import themeColors from 'theme/colors';


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavTab() {
	return (
		<Tab.Navigator initialRouteName="MainScreen"
			activeColor={themeColors.accent}
			inactiveColor="gray"
			barStyle={{ backgroundColor: themeColors.main }}
		>
			<Tab.Screen name="MainScreen" component={MainScreen}
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					)
				}}
			/>
			<Tab.Screen name="BookmarksList" component={BookmarksListScreen}
				options={{
					title: 'Bookmarks',
					
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="bookmark-multiple" color={color} size={26} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}
