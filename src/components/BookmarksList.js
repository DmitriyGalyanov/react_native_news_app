import React, {useState, useEffect} from 'react';

import {View, FlatList, Text} from 'react-native';

import NewsPiece from 'components/NewsPiece';

import {useSelector} from 'react-redux';
import {selectBookmarksData} from 'state_slices/bookmarksSlice';

import {selectLanguageData} from 'state_slices/languageSlice';


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
				// parentScreenName={parentScreenName}
				parentTabName={parentTabName}
				parentStackName={parentStackName}
			/>
		)
	};

	const [localization, setLocalization] = useState({});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage].alerts);
		});
	}, [interfaceLanguage]);

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
	}
	return (
		<View>
			<FlatList
				data={list}
				renderItem={renderItem}
				keyExtractor={(item) => item.url}
				refreshing={isListLoading}
				// onRefresh={onRefresh}
				// onEndReached={onScrollToEnd}
				onEndReachedThreshold={0.05}
			/>
		</View>
	)
}