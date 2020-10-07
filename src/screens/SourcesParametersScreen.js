import React, {useState, useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SourcesParametersMainScreen
	from 'screens/parameters/SourcesParametersMainScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

// import themeColors from 'theme/colors';

import topBarStyleOptions from 'theme/topBarStyleOptions';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

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
