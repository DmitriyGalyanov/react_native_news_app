import React, {useContext} from 'react';
import PropTypes from 'prop-types';

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

import {selectThemeData} from 'state_slices/themeSlice';

import {ThemeContext} from 'theme/ThemeContext';

const placeholderImgUrl = 'https://image.shutterstock.com/z/stock-vector-disconnected-cable-text-warning-message-sorry-something-went-wrong-oops-error-page-vector-1298184715.jpg';


NewsPiece.propTypes = {
	index: PropTypes.number.isRequired,

	item: PropTypes.shape({
		source: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string
		}),
		author: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		url: PropTypes.string,
		urlToImage: PropTypes.string,
		publishedAt: PropTypes.string,
		content: PropTypes.string
	}).isRequired,
};
export default function NewsPiece(props) {
	const dispatch = useDispatch();

	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

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
		bookmarksList?.find(bookmark =>
			bookmark?.url === url)
			? true
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

	const openWebView = () => {
		navigation.navigate('NewsPieceWebViewScreen', {
			uri: url,
		});
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				resizeMode="stretch"
				source={{
					uri: urlToImage ? urlToImage : placeholderImgUrl,
				}}
			/>
			<View style={styles.innerContainer}>
				<View style={styles.authorWrap}>
					<Text style={styles.author}>
						{author}
					</Text>
					{isBookmarked && (
						<TouchableHighlight onPress={() => dispatch(removeBookmark(item.url))}
							underlayColor={themeColors.main}
							activeOpacity={0.95}
							style={styles.bookmarkIcon}
						>
							<MaterialCommunityIcons name="bookmark"
								size={26} color={themeColors.main}
							/>
						</TouchableHighlight>
					)}
					{!isBookmarked && (
						<TouchableHighlight onPress={() => dispatch(addBookmark({...item}))}
							underlayColor={themeColors.main}
							activeOpacity={0.95}
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
						underlayColor={themeColors.main}
						activeOpacity={0.95}
						onPress={() => openWebView()}
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
