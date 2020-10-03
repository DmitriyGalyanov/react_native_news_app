import React, {useState, useEffect} from 'react';

import {View, FlatList, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {selectSearchParametersData} from 'state_slices/searchParametersSlice';

import NewsPiece from 'components/NewsPiece';

export default function HomeScreenNewsList() {
	const parentTabName = 'HomeScreen';
	const parentStackName = 'HomeMainScreen';

	const apiSrc = 'https://newsapi.org/v2/';
	const apiKey = '3f1d580b86b6414e8be8098c17351375';

	const pageSize = 20;

	const searchParametersData = useSelector(selectSearchParametersData).entries;
	const {endpoint,
		searchQuery,
		country,
		category,
		sortBy} = searchParametersData;

	const apiUrl = apiSrc + endpoint +
		`?apiKey=${apiKey}` + `&pageSize=${pageSize}` +
		`&q=${searchQuery}` +
		`&country=${country}` +
		`&sortBy=${sortBy}`
	;

	useEffect(() => {
		onRefresh();
	}, [searchParametersData]);


	const [list, setList] = useState([]);
	const isListLoading = false;
	const [isError, setIsError] = useState(false);

	const getMoreData = (isRefreshing = false) => {
		const offset = isRefreshing ? 0 : list.length;
		const page = Math.ceil(offset / pageSize) + 1;

		fetch(`${apiUrl}&page=${page}`)
			.then(response => response.json())
			.then(json => {
				setList(isRefreshing
					? json.articles
					: list.concat(json.articles))
			})
			.catch(error => setIsError(true)) //handle it somehow later
	};

	const onRefresh = () => {
		getMoreData(true);
	};

	const onScrollToEnd = () => {
		getMoreData(false);
	}

	const renderItem = (item) => {
		return (
			<NewsPiece {...item}
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
	return (
		<View>
			<FlatList
				data={list}
				renderItem={renderItem}
				keyExtractor={(item) => item.url} /* temporary...? */
				refreshing={isListLoading}
				onRefresh={onRefresh}
				onEndReached={onScrollToEnd}
				onEndReachedThreshold={0.05}
			/>
		</View>
	)
}