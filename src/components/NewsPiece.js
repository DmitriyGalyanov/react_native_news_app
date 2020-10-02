import React from 'react';

import {StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	TouchableHighlight} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import {selectBookmarksData,
	addBookmark, removeBookmark} from 'state_slices/bookmarksSlice';

import { useNavigation } from '@react-navigation/native';

import themeColors from 'theme/colors';


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

	innerContainer: {
		padding: 12
	},
	
	authorWrap: {
		flexDirection: 'row'
	},
	author: {
		fontSize: 17
	},
	bookmarkIcon: {
		marginLeft: 'auto'
	},

	title: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	content: {
		fontSize: 15,
	},
	bottomPart: { //naming is tough...
		flexDirection: 'row'
	},
	publisher: {
		fontSize: 18
	},
	publishedAt: {
		fontSize: 18
	},
	toWebViewIcon: {
		marginTop: 'auto',
		marginLeft: 'auto'
	}

});


export default function NewsPiece(props) {
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const {
		url,
		urlToImage,
		author,
		title,
		content,
		publishedAt} = props.item;
	const {name: publisher} = props.item.source;

	const {item} = props;

	const bookmarksData = useSelector(selectBookmarksData);
	const {entries: bookmarksList} = bookmarksData;

	const isBookmarked =
		bookmarksList.find(bookmark =>
			bookmark?.url === url
		) ? true
			: false

	const publishedAtObj = new Date(publishedAt);

	const publishedAtReadable = `${publishedAtObj.toDateString()}, ` +
		(publishedAtObj.getHours() > 9
			? publishedAtObj.getHours()
			: '0' + publishedAtObj.getHours()) +
		':' +
		(publishedAtObj.getMinutes() > 9
			? publishedAtObj.getMinutes()
			: '0' + publishedAtObj.getMinutes());

	const openWebView = (url) => {
		navigation.navigate('NewsPieceWebView', {
			uri: url
		});
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="stretch"
				source={{
					uri: urlToImage,
				}}
			/>
			<View style={styles.innerContainer}>
				<View style={styles.authorWrap}>
					<Text style={styles.author}>
						{author}
					</Text>
					{isBookmarked && (
						<TouchableHighlight onPress={() => dispatch(removeBookmark(item.url))}
							style={styles.bookmarkIcon}
						>
							<MaterialCommunityIcons name="bookmark"
								size={26} color={themeColors.accent}
								// onPress={() => alert('Pressed!')}
							/>
						</TouchableHighlight>
					)}
					{!isBookmarked && (
						<TouchableHighlight onPress={() => dispatch(addBookmark({...item}))}
							style={styles.bookmarkIcon}
						>
							<MaterialCommunityIcons name="bookmark-outline"
								size={26} color={'gray'}
							/>
						</TouchableHighlight>
					)}
				</View>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.content}>
					{content}
				</Text>
				<View style={styles.bottomPart}>
					<View>
						<Text style={styles.publisher}>
							{publisher}
						</Text>
						<Text style={styles.publishedAt}>
							{publishedAtReadable}
						</Text>
					</View>
					<TouchableHighlight
						// onPress={() => alert(url)}
						onPress={() => openWebView(url)}
						style={styles.toWebViewIcon}
					>
						<MaterialCommunityIcons name="import"
							size={26} color={'gray'}
						/>
					</TouchableHighlight>
				</View>
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