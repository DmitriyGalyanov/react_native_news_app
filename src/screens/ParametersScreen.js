import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchParametersScreen from './parameters/SearchParametersScreen';


const ParametersScreenStack = createStackNavigator();

export default function ParametersScreen() {

	return (
		<ParametersScreenStack.Navigator
			initialRouteName="SearchParametersScreen"
		>
			<ParametersScreenStack.Screen name="SearchParametersScreen"
				component={SearchParametersScreen}
			/>
		</ParametersScreenStack.Navigator>
	)
}