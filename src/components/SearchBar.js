import React, {useRef, useState} from 'react';

import {TextInput,
	StyleSheet, View,
	Animated, Button
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {editSearchQuery,
	selectSearchParametersData} from 'state_slices/searchParametersSlice';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import animations,
	{changeWidthAnim,
	fadeInAnim, fadeOutAnim} from 'theme/animations';


export default function SearchBar() {
	const dispatch = useDispatch();

	const initWidth = 0;
	const openWidth = 150; //mb will be responsive (dimension can help)
	const {defaultAnimTime: animTime} = animations;

	const [isOpen, setIsOpen] = useState(false);

	const searchBarWidth = useRef(new Animated.Value(initWidth)).current;
	const searchBarOpacity = useRef(new Animated.Value(0)).current;
	// const magnifyIconOpacity = useRef(new Animated.Value(1)).current;

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

	const searchQueryInit = useSelector(selectSearchParametersData)
		.entries.searchQuery;

	const [value, setValue] = useState(searchQueryInit);

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					// styles.animatedSearchBar,
					{
						width: searchBarWidth,
						opacity: searchBarOpacity
					}
				]}
			>
				<TextInput
					placeholder='search'
					onChangeText={text => setValue(text)}
					value={value}
				/>
			</Animated.View>
			
			<Animated.View
				// style={[
				// 	// styles.animatedSearchBar,
				// 	{
				// 		opacity: magnifyIconOpacity
				// 	}
				// ]}
			>
				<MaterialCommunityIcons name='magnify'
					size={26} color='green'
					// onPress={openSearchBar}
					onPress={handleMagnifierClick}
				/>
			</Animated.View>

			<View style={[
					{
						flexDirection: "column"
					}
				]}>
				<Button title="Open" onPress={openSearchBar} />
				<Button title="Close" onPress={closeSearchBar} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	}
})