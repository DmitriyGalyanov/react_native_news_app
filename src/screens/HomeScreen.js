import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeMainScreen from './home/HomeMainScreen';

// import NewsPieceWebView from 'components/NewsPieceWebView';

import themeColors from 'theme/colors';


const Stack = createStackNavigator();

export default function HomeScreen() {
	return (
		<Stack.Navigator initialRouteName="HomeMainScreen">
			<Stack.Screen name="HomeMainScreen" component={HomeMainScreen}
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
			{/* <Stack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'Bookmarks',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/> */}
		</Stack.Navigator>
	)
}