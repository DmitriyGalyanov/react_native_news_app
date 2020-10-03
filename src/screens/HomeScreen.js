import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from 'components/SearchBar';

import HomeMainScreen from './home/HomeMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';


import themeColors from 'theme/colors';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	return (
		<HomeScreenStack.Navigator initialRouteName="HomeMainScreen">
			<HomeScreenStack.Screen name="HomeMainScreen" component={HomeMainScreen}
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent,
					headerRight: () => <SearchBar />
				}}
			/>
			<HomeScreenStack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'News Web View (HOME)',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
		</HomeScreenStack.Navigator>
	)
}