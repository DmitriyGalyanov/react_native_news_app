import React, {useContext} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SearchParametersScreen from 'screens/SearchParametersScreen';
import SourcesParametersScreen from 'screens/SourcesParametersScreen';

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const Tab = createMaterialBottomTabNavigator();

export default function ParametersRouteBottomNavTab() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {searchParametersMainScreenTitle,
		sourcesParametersMainScreenTitle} = localization;

	return (
		<Tab.Navigator initialRouteName="SearchParametersScreen"
			activeColor={themeColors.accent}
			inactiveColor="gray"
			barStyle={{ backgroundColor: themeColors.main }}
		>
			<Tab.Screen name="SearchParametersScreen"
				component={SearchParametersScreen}
				options={{
					title: searchParametersMainScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="magnify"
							color={color} size={26}
						/>
					)
				}}
			/>
			<Tab.Screen name="SourcesParametersScreen"
				component={SourcesParametersScreen}
				options={{
					title: sourcesParametersMainScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="source-branch"
							color={color} size={26}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	)
}
