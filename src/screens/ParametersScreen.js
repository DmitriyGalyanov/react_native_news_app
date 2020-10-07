import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchParametersScreen from './parameters/SearchParametersScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';


const ParametersScreenStack = createStackNavigator();

export default function ParametersScreen() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {searchParametersScreenTitle} = localization;

	return (
		<ParametersScreenStack.Navigator
			initialRouteName="SearchParametersScreen"
			screenOptions={topBarStyleOptions}
		>
			<ParametersScreenStack.Screen name="SearchParametersScreen"
				component={SearchParametersScreen}
				options={{
					title: searchParametersScreenTitle
				}}
			/>
		</ParametersScreenStack.Navigator>
	)
}