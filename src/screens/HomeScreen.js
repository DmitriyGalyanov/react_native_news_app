import React, {useContext} from 'react';

import {View, Dimensions, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SearchBar from 'components/SearchBar';

import HomeMainScreen from 'screens/home/HomeMainScreen';

import NewsPieceWebViewScreen from 'screens/NewsPieceWebViewScreen';

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const HomeScreenStack = createStackNavigator();

export default function HomeScreen() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {homeScreenTitle,
		newsPieceWebViewScreenTitle} = localization;

	return (
		<HomeScreenStack.Navigator initialRouteName="HomeMainScreen"
			screenOptions={{
				...topBarStyleOptions,
				headerStyle: {
					backgroundColor: themeColors.main
				},
				headerTintColor: themeColors.accent
			}}
			headerMode='screen'
		>
			<HomeScreenStack.Screen name="HomeMainScreen"
				component={HomeMainScreen}
				options={{
					title: homeScreenTitle,
					headerRight: () => {
						return (
							<View style={styles.searchBar}>
								<SearchBar />
							</View>
						)
					}
				}}
			/>
			<HomeScreenStack.Screen name="NewsPieceWebViewScreen"
				component={NewsPieceWebViewScreen}
				options={{
					title: `${newsPieceWebViewScreenTitle}`,
				}}
			/>
		</HomeScreenStack.Navigator>
	)
}

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	searchBar: {
		marginRight: windowWidth * 0.075,
		// alignSelf: "center"
		// why it centers only after first animation?
	}
});