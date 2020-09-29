import React from 'react';

import {View, Text} from 'react-native';

import NewsList from 'components/NewsList';

export default function NewsListPage() {

	return (
		<View>
			<Text>News List Page</Text>
			<NewsList />
		</View>
	)
}