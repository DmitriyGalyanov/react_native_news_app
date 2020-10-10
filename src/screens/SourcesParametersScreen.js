import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SourcesParametersMainScreen
	from 'screens/parameters/SourcesParametersMainScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {LocalizationContext} from 'localization/LocalizationContext';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {sourcesParametersMainScreenTitle} = localization;

	return (
		<HomeScreenStack.Navigator initialRouteName="SourcesParametersMainScreen"
			screenOptions={topBarStyleOptions}
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
