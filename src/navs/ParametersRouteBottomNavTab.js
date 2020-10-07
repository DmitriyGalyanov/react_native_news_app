import React, {useState, useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SearchParametersScreen from 'screens/SearchParametersScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import themeColors from 'theme/colors';


const Tab = createMaterialBottomTabNavigator();

export default function ParametersRouteBottomNavTab() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {searchParametersMainScreenTitle,
		} = localization;

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
		</Tab.Navigator>
	)
}
