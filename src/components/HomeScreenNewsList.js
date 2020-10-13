import React, {useState, useEffect} from 'react';

import {View, FlatList, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {selectSearchParametersData} from 'state_slices/searchParametersSlice';

import NewsPiece from 'components/NewsPiece';
import CenteredAlert from 'components/CenteredAlert';

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
		language,
		category,
		sortBy,
		sources: sourcesObject} = searchParametersData;
	
	const topHeadlinesUrl = apiSrc + 'top-headlines' +
		`?apiKey=${apiKey}` + `&pageSize=${pageSize}` +
		`&q=${searchQuery}` +
		`&country=${country}` +
		`&category=${category}`
	;

	const everythingUrl = apiSrc + 'everything' +
		`?apiKey=${apiKey}` + `&pageSize=${pageSize}` +
		`&q=${searchQuery}` +
		`&language=${language}` +
		`&sortBy=${sortBy}`
	;

	const sourcesArray = Object.entries(sourcesObject)
		.filter(source => source[1].isChosen);

	const sourcesString = sourcesArray.map(source => source[1].id).join(',');

	const apiUrl = () => {
		let sourcesParameter = '&sources=';
			if(!category && !country) {
				sourcesParameter += sourcesString;
			};

		switch(endpoint) {
			case 'top-headlines': return topHeadlinesUrl + sourcesParameter;
			case 'everything': return everythingUrl + sourcesParameter;
			default: return everythingUrl + sourcesParameter;
		};
	};

	useEffect(() => {
		onRefresh();
	}, [searchParametersData]); //[apiUrl]


	const [list, setList] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isError, setIsError] = useState(false);

	const getMoreData = (isRefreshing = false) => {
		setIsUpdating(true);
		const offset = isRefreshing ? 0 : list.length;
		const page = Math.ceil(offset / pageSize) + 1;

		fetch(`${apiUrl()}&page=${page}`)
			.then(response => response.json())
			.then(json => {
				setList(isRefreshing
					? json.articles
					: list.concat(json.articles))
				setIsUpdating(false);
			})
			.catch(error => setIsError(true)) //handle it somehow later
	};

	const onRefresh = () => {
		getMoreData(true);
	};

	const onScrollToEnd = () => {
		getMoreData(false);
	};

	const renderItem = (item) => {
		return (
			<NewsPiece {...item}
				parentTabName={parentTabName}
				parentStackName={parentStackName}
			/>
		)
	};

	if (list?.length === 0 || list === undefined) {
		return (
			<CenteredAlert alertText='No results. Try to provide more parameters'/>
		)
	};
	if (isError) {
		return (
			<CenteredAlert alertText='Something went wrong... refresh please'/>
		)
	};

	return (
		<View>
			<FlatList
				data={list}
				renderItem={renderItem}
				keyExtractor={(_, index) => index.toString()}
				refreshing={isUpdating}
				onRefresh={onRefresh}
				onEndReached={onScrollToEnd}
				onEndReachedThreshold={0.15}
			/>
		</View>
	)
}