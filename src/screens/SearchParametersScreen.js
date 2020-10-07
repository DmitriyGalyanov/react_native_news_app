import React, { useState, useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SearchParametersMainScreen from 'screens/parameters/SearchParametersMainScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';


const ParametersScreenStack = createStackNavigator();

export default function SearchParametersScreen() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

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