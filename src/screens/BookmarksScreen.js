import React, {useContext} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BookmarksMainScreen from './bookmarks/BookmarksMainScreen';

import NewsPieceWebViewScreen from 'screens/NewsPieceWebViewScreen';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

import topBarStyleOptions from 'theme/topBarStyleOptions';
import {LocalizationContext} from 'localization/LocalizationContext';


export const BookmarksScreenStack = createStackNavigator();

export default function BookmarksScreen() {
	const localization = useContext(LocalizationContext);
	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const {bookmarksScreenTitle} = localization
		?.[interfaceLanguage].screensTitles;

	return (
		<BookmarksScreenStack.Navigator initialRouteName="BookmarksMainScreen"
			screenOptions={topBarStyleOptions}
			headerMode='screen'
		>
			<BookmarksScreenStack.Screen name="BookmarksMainScreen" component={BookmarksMainScreen}
				options={{
					title: bookmarksScreenTitle,
				}}
			/>
			<BookmarksScreenStack.Screen name="NewsPieceWebViewScreen" component={NewsPieceWebViewScreen}
				options={{
					title: 'News Web View (BOOKMARKS)',
				}}
			/>
		</BookmarksScreenStack.Navigator>
	)
}