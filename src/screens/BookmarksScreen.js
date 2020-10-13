import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BookmarksMainScreen from './bookmarks/BookmarksMainScreen';

import NewsPieceWebViewScreen from 'screens/NewsPieceWebViewScreen';

import {useSelector} from 'react-redux';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


export const BookmarksScreenStack = createStackNavigator();

export default function BookmarksScreen() {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.screensTitles;

	const {bookmarksScreenTitle,
		newsPieceWebViewScreenTitle} = localization;

	return (
		<BookmarksScreenStack.Navigator initialRouteName="BookmarksMainScreen"
			screenOptions={{
				...topBarStyleOptions,
				headerStyle: {
					backgroundColor: themeColors.main
				},
				headerTintColor: themeColors.accent
			}}
			headerMode='screen'
		>
			<BookmarksScreenStack.Screen name="BookmarksMainScreen" component={BookmarksMainScreen}
				options={{
					title: bookmarksScreenTitle,
				}}
			/>
			<BookmarksScreenStack.Screen name="NewsPieceWebViewScreen" component={NewsPieceWebViewScreen}
				options={{
					title: newsPieceWebViewScreenTitle,
				}}
			/>
		</BookmarksScreenStack.Navigator>
	)
}