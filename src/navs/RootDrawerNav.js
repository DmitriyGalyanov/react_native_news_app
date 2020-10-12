import React, {useContext} from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainRouteBottomNavTab from 'navs/MainRouteBottomNavTab';
import ParametersRouteBottomNavTab from 'navs/ParametersRouteBottomNavTab';

import MainDrawerContent from 'components/MainDrawerContent'; //rename

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import rootDrawerContentOptions from 'theme/rootDrawerContentOptions';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {mainScreenTitle,
		parametersScreenTitle} = localization;

	return (
		<Drawer.Navigator initialRouteName="MainScreen"
			drawerContentOptions={{
				rootDrawerContentOptions,
				activeTintColor: themeColors.secondary
			}}
			drawerContent={(props) => <MainDrawerContent {...props} />}
		>
			<Drawer.Screen name="MainScreen"
				component={MainRouteBottomNavTab}
				options={{
					title: mainScreenTitle
				}}
			/>
			<Drawer.Screen name="ParametersScreen"
				component={ParametersRouteBottomNavTab}
				options={{
					title: parametersScreenTitle
				}}
			/>
		</Drawer.Navigator>
	)
}