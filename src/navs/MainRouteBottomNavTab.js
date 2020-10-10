import React, {useContext} from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from 'screens/HomeScreen';
import BookmarksScreen from 'screens/BookmarksScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import themeColors from 'theme/colors';

import {LocalizationContext} from 'localization/LocalizationContext';


const Tab = createMaterialBottomTabNavigator();

export default function MainRouteBottomNavTab() {
	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

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
