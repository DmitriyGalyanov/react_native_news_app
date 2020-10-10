import React, {useState, useEffect, useContext} from 'react';

import {View, FlatList, Text} from 'react-native';

import NewsPiece from 'components/NewsPiece';

import {useSelector} from 'react-redux';
import {selectBookmarksData} from 'state_slices/bookmarksSlice';

import {selectLanguageData} from 'state_slices/languageSlice';

import {LocalizationContext} from 'localization/LocalizationContext';


export default function BookmarksList() {
	const parentTabName = 'BookmarksScreen',
				parentStackName = 'BookmarksMainScreen';

	const bookmarksData = useSelector(selectBookmarksData);
	const {entries: list} = bookmarksData;

	const isListLoading = false;
	const [isError, setIsError] = useState(false);

	const renderItem = (item) => {
		return (
			<NewsPiece {...item}
				parentTabName={parentTabName}
				parentStackName={parentStackName}
			/>
		)
	};

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.alerts;

	const {noBookmarks} = localization;

	if (isError) {
		return (
			//here should be placed an error placeholder component
			<Text>Something went wrong... refresh please</Text>
			//add a refresh button (if is error; there is an opinion that such error status can be stored in Redux too)
		)
	};
	if (list.length === 0) {
		return (
			<Text>{noBookmarks}</Text>
		)
	};
	return (
		<View>
			<FlatList
				data={list}
				renderItem={renderItem}
				keyExtractor={(item) => item.url}
				refreshing={isListLoading}
				onEndReachedThreshold={0.05}
			/>
		</View>
	)
}