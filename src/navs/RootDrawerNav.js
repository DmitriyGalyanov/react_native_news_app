import React, { useState, useEffect } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainRouteBottomNavTab from 'screens/MainRouteBottomNavTab';

import MainDrawerContent from 'components/MainDrawerContent';

import ParametersScreen from 'screens/ParametersScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import mainDrawerContentOptions from 'theme/mainDrawerContentOptions';

// import themeColors from 'theme/colors';


const Drawer = createDrawerNavigator();

export default function RootDrawerNav() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {mainScreenTitle,
		parametersScreenTitle} = localization;

	return (
		<Drawer.Navigator initialRouteName="MainScreen"
			drawerContentOptions={mainDrawerContentOptions}
			drawerContent={(props) => <MainDrawerContent {...props} />}
		>
			<Drawer.Screen name="MainScreen" component={MainRouteBottomNavTab}
				options={{
					title: mainScreenTitle
				}}
			/>
			<Drawer.Screen name="ParametersScreen"
				component={ParametersScreen}
				options={{
					title: parametersScreenTitle
				}}
			/>
		</Drawer.Navigator>
	)
}