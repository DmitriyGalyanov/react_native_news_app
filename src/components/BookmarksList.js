import React, {useState, useEffect} from 'react';

import {View, FlatList, Text} from 'react-native';

import NewsPiece from 'components/NewsPiece';

import {useSelector} from 'react-redux';
import {selectBookmarksData} from 'state_slices/bookmarksSlice';

export default function BookmarksList() {
	const parentTabName = 'BookmarksScreen',
				parentStackName = 'BookmarksMainScreen';

	const bookmarksData = useSelector(selectBookmarksData);
	const {entries: list} = bookmarksData;

	const isListLoading = false;
	const [isError, setIsError] = useState(false);

	// const getMoreData = (isRefreshing = false) => {
	// 	const offset = isRefreshing ? 0 : list.length;
	// 	const page = Math.ceil(offset / limit) + 1;

	// 	fetch(`${apiUrl}&page=${page}`)
	// 		.then(response => response.json())
	// 		.then(json => {
	// 			setList(isRefreshing
	// 				? json.articles
	// 				: list.concat(json.articles))
	// 		})
	// 		.catch(error => setIsError(true)) //handle it somehow later
	// };

	// const onRefresh = () => {
	// 	// getMoreData(true);
	// 	console.log(bookmarksData);
	// };

	// const onScrollToEnd = () => {
	// 	getMoreData(false);
	// };

	const renderItem = (item) => {
		return (
			<NewsPiece {...item}
				// parentScreenName={parentScreenName}
				parentTabName={parentTabName}
				parentStackName={parentStackName}
			/>
		)
	};

	if (isError) {
		return (
			//here should be placed an error placeholder component
			<Text>Something went wrong... refresh please</Text>
			//add a refresh button (if is error; there is an opinion that such error status can be stored in Redux too)
		)
	};
	if (list.length === 0) {
		return (
			<Text>No bookmarks yet!</Text>
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