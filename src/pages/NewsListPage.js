import React, {useEffect, useState} from 'react';

import {View, Text} from 'react-native';

import NewsList from 'components/NewsList';

export default function NewsListPage() {
	const [list, setList] = useState([]);
	const [isListLoading, setIsListLoading] = useState(false);

	// useEffect(() => {
	// 	const limit = 20;
	// 	const 
	// }, [isListLoading])

	return (
		<View>
			<Text>News List Page</Text>
			<NewsList />
		</View>
	)
}