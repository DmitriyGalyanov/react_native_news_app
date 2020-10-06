import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavTab from 'navs/BottomNavTab';

import ParametersScreen from 'screens/ParametersScreen';

// import themeColors from 'theme/colors';

const Drawer = createDrawerNavigator();

export default function MainDrawerNav() {
	return (
		<Drawer.Navigator initialRouteName="MainRoute">
			<Drawer.Screen name="MainRoute" component={BottomNavTab}/>
			<Drawer.Screen name="ParametersScreen"
				component={ParametersScreen}/>
		</Drawer.Navigator>
	)
}