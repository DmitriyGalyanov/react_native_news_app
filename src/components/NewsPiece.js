import React from 'react';

import {StyleSheet,
	View,
	Text,
	Image,
	Dimensions,} from 'react-native';

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		
		width: windowWidth * 0.85,
		alignSelf: 'center',

		backgroundColor: '#fff', //opacity needed
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10
	},

	image: {
		width: windowWidth * 0.85,
		height: 200,
	},
	
	author: {
		fontSize: 17
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	content: {
		fontSize: 15,
	},
	publisher: {
		fontSize: 18
	},
	publishedAt: {
		fontSize: 18
	}

});

export default function NewsPiece(props) {
	const {
		urlToImage,
		author,
		title,
		content,
		publishedAt} = props.item;
	const {publisher} = props.item.source;

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="stretch"
				source={{
					uri: urlToImage,
				}}
			/>
			<View>
				<Text style={styles.author}>
					{author}
				</Text>
			</View>
			<Text style={styles.title}>
				{title}
			</Text>
			<Text style={styles.content}>
				{content}
			</Text>
			<View>
				<View>
					<Text style={styles.publisher}>
						{publisher}
					</Text>
					<Text style={styles.publishedAt}>
						{publishedAt}
					</Text>
				</View>
				{/* <View>
				</View> */}
			</View>
		</View>
	);
}

/*
img
author and bookmark icon
title
content (cut if needed)
publisher       link to source   link to news piece page
publishedAt
*/