import React, {useRef, useState} from 'react';

import {TextInput,
	StyleSheet, View,
	Animated, Button
} from 'react-native';
// import Animated from 'react-native-reanimated';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import animations,
	{changeWidthAnim,
	fadeInAnim, fadeOutAnim} from 'theme/animations';


export default function SearchBar() {
	const initWidth = 0;
	const openWidth = 150; //mb will be responsive (dimension can help)
	const {defaultAnimTime: animTime} = animations;

	const [isOpen, setIsOpen] = useState(false);

	const searchBarWidth = useRef(new Animated.Value(initWidth)).current;
	const searchBarOpacity = useRef(new Animated.Value(0)).current;
	const magnifyIconOpacity = useRef(new Animated.Value(1)).current;

	const openSearchBar = () => {
		if(isOpen) return;
		setIsOpen(true);
		changeWidthAnim(searchBarWidth, openWidth, animTime);
		fadeOutAnim(magnifyIconOpacity, animTime);
		fadeInAnim(searchBarOpacity, animTime);
	};
	const closeSearchBar = () => {
		if (!isOpen) return;
		changeWidthAnim(searchBarWidth, initWidth, animTime);
		fadeInAnim(magnifyIconOpacity, animTime);
		fadeOutAnim(searchBarOpacity, animTime);
		setIsOpen(false);
	};

	const [value, setValue] = useState(''); //will be connected with Redux

	return (
		<View style={styles.container}>
			<Animated.View
				style={[
					// styles.animatedSearchBar,
					{
						opacity: magnifyIconOpacity
					}
				]}
			>
				<MaterialCommunityIcons name='magnify'
					size={26} color='green'
					onPress={openSearchBar}
				/>
			</Animated.View>

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