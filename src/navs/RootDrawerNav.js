import React, {useContext} from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainRouteBottomNavTab from 'navs/MainRouteBottomNavTab';
import ParametersRouteBottomNavTab from 'navs/ParametersRouteBottomNavTab';

import MainDrawerContent from 'components/MainDrawerContent';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import mainDrawerContentOptions from 'theme/mainDrawerContentOptions';

import {LocalizationContext} from 'localization/LocalizationContext';


const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {mainScreenTitle,
		parametersScreenTitle} = localization;

	return (
		<Drawer.Navigator initialRouteName="MainScreen"
			drawerContentOptions={mainDrawerContentOptions}
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