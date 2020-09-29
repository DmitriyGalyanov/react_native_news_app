import React from 'react';

import {View, FlatList} from 'react-native';

// import NewsPiece from '../NewsPiece';
// import NewsPiece from 'components/NewsPiece';
// import NewsPiece from '../NewsPiece';
import NewsPiece from '../components/NewsPiece';

export default function NewsList(props) {
	// console.log(props);

	// const listData = props;

	const listData = [
		{
			author: 'author',
			content: 'content',
			description: 'description',
			publishedAt: 'publishedAt',
			publisher: 'publisher',
			title: 'title',
			url: 'url',
			urlToImage: 'urlToImage',
		}
	]

	const renderItem = (item) => {

		return (
			<>
				<NewsPiece {...item} />
			</>
		)
	}


	return (
		<View>
			<FlatList
				data={listData}
				renderItem={renderItem}
				keyExtractor={(item) => item.urlToImage} /* temporary... */
			/>
		</View>
	)
}