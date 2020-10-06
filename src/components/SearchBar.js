import React, {useRef, useState} from 'react';

import {View, TextInput,
	Animated, StyleSheet
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {editSearchQuery,
	selectSearchParametersData} from 'state_slices/searchParametersSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import animations,
	{changeWidthAnim,
	fadeInAnim, fadeOutAnim} from 'theme/animations';

import themeColors from 'theme/colors';


export default function SearchBar() {
	const dispatch = useDispatch();

	const initWidth = 0;
	const openWidth = 240; //mb will be responsive (dimension can help)
	const {defaultAnimTime: animTime} = animations;

	const [isOpen, setIsOpen] = useState(false);

	const searchBarWidth = useRef(new Animated.Value(initWidth)).current;
	const searchBarOpacity = useRef(new Animated.Value(0)).current;

	const openSearchBar = () => {
		if(isOpen) return;
		setIsOpen(true);
		changeWidthAnim(searchBarWidth, openWidth, animTime);
		fadeInAnim(searchBarOpacity, animTime);
	};
	const closeSearchBar = () => {
		if (!isOpen) return;
		changeWidthAnim(searchBarWidth, initWidth, animTime);
		fadeOutAnim(searchBarOpacity, animTime);
		setIsOpen(false);
	};

	const sendSearchRequest = () => {
		dispatch(editSearchQuery(value));
		closeSearchBar();
	};

	const handleMagnifierClick = () => {
		if(!isOpen) openSearchBar();
		if(isOpen) sendSearchRequest();
	};

	const handleEnterPress = () => {
		sendSearchRequest();
	}

	const searchQueryInit = useSelector(selectSearchParametersData)
		.entries.searchQuery;
	const [value, setValue] = useState(searchQueryInit);

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					styles.searchBarWrap,
					{
						width: searchBarWidth,
						opacity: searchBarOpacity
					}
				]}
			>
				<TextInput style={styles.searchBarInput}
					placeholder='search'
					value={value}
					onChangeText={text => setValue(text)}
					onSubmitEditing={() => handleEnterPress()}
				/>
			</Animated.View>
			
			<Animated.View style={styles.magnifierIcon}>
				<MaterialCommunityIcons name='magnify'
					size={26} color={themeColors.secondary}
					onPress={handleMagnifierClick}
				/>
			</Animated.View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	magnifierIcon: {
		// why does it autocenter after bar expand??
		position: "absolute",
		right: 4,
		top: 3
	},
	searchBarWrap: {
		backgroundColor: 'white',
		borderRadius: 10,
		height: 34,
	},
	searchBarInput: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		lineHeight: 18
	}
});