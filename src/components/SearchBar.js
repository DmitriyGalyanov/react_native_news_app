import React, {useRef, useState} from 'react';

import {View, TextInput,
	Animated, StyleSheet
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {editSearchQuery,
	selectSearchParametersData} from 'state_slices/searchParametersSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import animations,
	{changeValueAnim,
	fadeInAnim, fadeOutAnim} from 'theme/animations';

import themeColors from 'theme/colors';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

export default function SearchBar() {
	const dispatch = useDispatch();

	const initWidth = 26;
	const openWidth = 240; //mb will be responsive (dimension can help)
	const {defaultAnimTime: animTime} = animations;

	const [isOpen, setIsOpen] = useState(false);

	const searchBarWidth = useRef(new Animated.Value(initWidth)).current;
	const searchBarOpacity = useRef(new Animated.Value(0)).current;
	const magnifierColor = useRef(new Animated.Value(0)).current;

	const openSearchBar = () => {
		if(isOpen) return;
		setIsOpen(true);
		changeValueAnim(magnifierColor, animTime, animTime);
		changeValueAnim(searchBarWidth, openWidth, animTime);
		fadeInAnim(searchBarOpacity, animTime);
	};
	const closeSearchBar = () => {
		if (!isOpen) return;
		changeValueAnim(magnifierColor, 0, animTime);
		changeValueAnim(searchBarWidth, initWidth, animTime);
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
				<AnimatedTextInput
					style={[
						styles.searchBarInput,
						{
							width: searchBarWidth,
							opacity: searchBarOpacity
						}
					]}
					placeholder='search'
					value={value}
					onChangeText={text => setValue(text)}
					onSubmitEditing={() => handleEnterPress()}
				/>
				<AnimatedIcon name='magnify'
					size={26}
					style={[
						styles.magnifierIcon,
						{
							color: magnifierColor.interpolate({
								inputRange: [0, animTime],
								outputRange: [themeColors.accent, themeColors.secondary]
							})
						}
					]}
					onPress={handleMagnifierClick}
				/>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	magnifierIcon: {
		position: "absolute",
		right: 4,
		top: 3
	},
	searchBarInput: {
		backgroundColor: themeColors.accent,
		borderRadius: 10,
		height: 34,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		lineHeight: 18
	}
});
