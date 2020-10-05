import React from 'react';

import {View, Text} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavTab from 'navs/BottomNavTab';
import SearchParametersRoute from 'navs/SearchParametersRoute';

import themeColors from 'theme/colors';

const Drawer = createDrawerNavigator();

export default function MainDrawerNav() {
	return (
		<Drawer.Navigator initialRouteName="MainRoute">
			<Drawer.Screen name="MainRoute" component={BottomNavTab}/>
			<Drawer.Screen name="SearchParametersRoute"
				component={SearchParametersRoute}/>
		</Drawer.Navigator>
	)
}