import React, {useState, useEffect} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import BookmarksScreen from 'screens/BookmarksScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import themeColors from 'theme/colors';


const Tab = createMaterialBottomTabNavigator();

export default function MainRouteBottomNavTab() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {homeScreenTitle,
		bookmarksScreenTitle} = localization;

	return (
		<Tab.Navigator initialRouteName="HomeScreen"
			activeColor={themeColors.accent}
			inactiveColor="gray"
			barStyle={{ backgroundColor: themeColors.main }}
		>
			<Tab.Screen name="HomeScreen" component={HomeScreen}
				options={{
					title: homeScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					)
				}}
			/>
			<Tab.Screen name="BookmarksScreen" component={BookmarksScreen}
				options={{
					title: bookmarksScreenTitle,
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="bookmark-multiple" color={color} size={26} />
					)
				}}
			/>
		</Tab.Navigator>
	)
}
