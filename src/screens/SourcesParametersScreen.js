import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SourcesParametersMainScreen
	from 'screens/parameters/SourcesParametersMainScreen';

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {sourcesParametersMainScreenTitle} = localization;

	return (
		<HomeScreenStack.Navigator initialRouteName="SourcesParametersMainScreen"
			screenOptions={{
				...topBarStyleOptions,
				headerStyle: {
					backgroundColor: themeColors.main
				},
				headerTintColor: themeColors.accent
			}}
			headerMode='screen'
		>
			<HomeScreenStack.Screen name="SourcesParametersMainScreen"
				component={SourcesParametersMainScreen}
				options={{
					title: sourcesParametersMainScreenTitle,
				}}
			/>
		</HomeScreenStack.Navigator>
	)
}
