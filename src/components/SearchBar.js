import React, {useRef, useState, useContext} from 'react';

import {View, TextInput,
	Animated, StyleSheet} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {editSearchQuery,
	selectSearchParametersData} from 'state_slices/searchParametersSlice';

import {selectThemeData} from 'state_slices/themeSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import animations,
	{changeValueAnim,
	fadeInAnim, fadeOutAnim} from 'theme/animations';

import {ThemeContext} from 'theme/ThemeContext';
import {LocalizationContext} from 'localization/LocalizationContext';


const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);

export default function SearchBar() {
	const dispatch = useDispatch();

	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.parametersTitles;

	const {searchTitle} = localization;

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
							backgroundColor: 'white',
							width: searchBarWidth,
							opacity: searchBarOpacity
						}
					]}
					placeholder={searchTitle}
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
								outputRange: [themeColors.accent, themeColors.main]
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
		borderRadius: 10,
		height: 34,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		lineHeight: 18
	}
});
