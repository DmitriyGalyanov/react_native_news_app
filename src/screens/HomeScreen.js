import React from 'react';

import {View} from 'react-native';

import NewsList from 'components/NewsList';

import { createStackNavigator } from '@react-navigation/stack';

import themeColors from 'theme/colors';


function HomeMainScreen() {
	return (
		<View>
			<NewsList />
		</View>
	)
}


const Stack = createStackNavigator();

export default function HomeScreen() { // MainScreen

	return (
		<Stack.Navigator initialRouteName="HomeMainScreen"
			
		>
			<Stack.Screen name="HomeMainScreen" component={HomeMainScreen}
				options={{
					title: 'Home',
					headerStyle: {
						backgroundColor: themeColors.main
					},
					headerTintColor: themeColors.accent
				}}
			/>
		</Stack.Navigator>
	)
}