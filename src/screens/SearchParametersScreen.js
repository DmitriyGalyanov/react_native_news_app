import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchParametersMainScreen from 'screens/parameters/SearchParametersMainScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {LocalizationContext} from 'localization/LocalizationContext';


const ParametersScreenStack = createStackNavigator();

export default function SearchParametersScreen() {

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {searchParametersMainScreenTitle} = localization;

	return (
		<ParametersScreenStack.Navigator
			initialRouteName="SearchParametersMainScreen"
			screenOptions={topBarStyleOptions}
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