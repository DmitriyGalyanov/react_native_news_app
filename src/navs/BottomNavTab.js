import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import BookmarksScreen from 'screens/BookmarksScreen';

import themeColors from 'theme/colors';


const Tab = createMaterialBottomTabNavigator();

export default function BottomNavTab() {
	return (
		<Tab.Navigator initialRouteName="HomeScreen"
			activeColor={themeColors.accent}
			inactiveColor="gray"
			barStyle={{ backgroundColor: themeColors.main }}
		>
			<Tab.Screen name="HomeScreen" component={HomeScreen}
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					)
				}}
			/>
			<Tab.Screen name="BookmarksScreen" component={BookmarksScreen}
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
