import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchParametersMainScreen from 'screens/parameters/SearchParametersMainScreen';

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const ParametersScreenStack = createStackNavigator();

export default function SearchParametersScreen() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {searchParametersMainScreenTitle} = localization;

	return (
		<ParametersScreenStack.Navigator
			initialRouteName="SearchParametersMainScreen"
			screenOptions={{
				...topBarStyleOptions,
				headerStyle: {
					backgroundColor: themeColors.main
				},
				headerTintColor: themeColors.accent
			}}
			headerMode='screen'
		>
			<ParametersScreenStack.Screen name="SearchParametersMainScreen"
				component={SearchParametersMainScreen}
				options={{
					title: searchParametersMainScreenTitle
				}}
			/>
		</ParametersScreenStack.Navigator>
	)
}