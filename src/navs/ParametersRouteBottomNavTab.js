import React, {useState, useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ParametersScreen from 'screens/ParametersScreen';
//searchParametersScreen

// import HomeScreen from 'screens/HomeScreen';
// import BookmarksScreen from 'screens/BookmarksScreen';

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

	const {searchParametersScreenTitle,
		} = localization;

	return (
		<Tab.Navigator initialRouteName="SearchParametersScreen"
			activeColor={themeColors.accent}
			inactiveColor="gray"
			barStyle={{ backgroundColor: themeColors.main }}
		>
			<Tab.Screen name="SearchParametersScreen" component={ParametersScreen}
				options={{
					title: searchParametersScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="magnify"
							color={color} size={26}
						/>
					)
				}}
			/>
			{/* <Tab.Screen name="BookmarksScreen" component={BookmarksScreen}
				options={{
					title: bookmarksScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="bookmark-multiple" color={color} size={26} />
					)
				}}
			/> */}
		</Tab.Navigator>
	)
}
