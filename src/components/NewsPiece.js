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
		marginTop: 12,

		backgroundColor: '#fff', //opacity needed
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10
	},

	image: {
		width: windowWidth * 0.85 - 2,
		height: 200,
		borderRadius: 10,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
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

	const publishedAtObj = new Date(publishedAt);

	const publishedAtReadable = `${publishedAtObj.toDateString()}, ` +
		(publishedAtObj.getHours() > 9
			? publishedAtObj.getHours()
			: '0' + publishedAtObj.getHours()) +
		':' +
		(publishedAtObj.getMinutes() > 9
			? publishedAtObj.getMinutes()
			: '0' + publishedAtObj.getMinutes());

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
						{publishedAtReadable}
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