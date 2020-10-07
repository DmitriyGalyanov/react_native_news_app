import React, {useState, useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BookmarksMainScreen from './bookmarks/BookmarksMainScreen';

import NewsPieceWebView from 'components/NewsPieceWebView';

import {useSelector} from 'react-redux';
import {selectLanguageData} from 'state_slices/languageSlice';

// import themeColors from 'theme/colors';

import topBarStyleOptions from 'theme/topBarStyleOptions';


export const BookmarksScreenStack = createStackNavigator();

export default function BookmarksScreen() {
	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].screensTitles);
		});
	}, [interfaceLanguage]);

	const {bookmarksScreenTitle} = localization;

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
			<BookmarksScreenStack.Screen name="NewsPieceWebView" component={NewsPieceWebView}
				options={{
					title: 'News Web View (BOOKMARKS)',
				}}
			/>
		</BookmarksScreenStack.Navigator>
	)
}