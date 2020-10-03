import React, {useRef} from 'react';

import {TextInput,
	StyleSheet, View,
	Animated, Button
} from 'react-native';
// import Animated from 'react-native-reanimated';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function SearchBar() {
	const initWidth = 0;
	const openWidth = 150; //mb will be responsive
	const animTime = 2000;

	const searchBarWidth = useRef(new Animated.Value(initWidth)).current;
	const searchBarOpacity = useRef(new Animated.Value(0)).current;
	const magnifyIconOpacity = useRef(new Animated.Value(1)).current;

	const extensionAnim = (target) => {
		Animated.timing(target, {
			toValue: openWidth,
			duration: animTime,
			useNativeDriver: false
		}).start();
	};
	const compressAnim = (target) => {
		Animated.timing(target, {
			toValue: initWidth,
			duration: animTime,
			useNativeDriver: false
		}).start();
	};

	const fadeInAnim = (target) => {
		Animated.timing(target, {
			toValue: 1,
			duration: animTime,
			useNativeDriver: false
		}).start();
	};

	const fadeOutAnim = (target) => {
		Animated.timing(target, {
			toValue: 0,
			duration: animTime,
			useNativeDriver: false
		}).start();
	};

	const openSearchBar = () => {
		console.log('openSearchBar');
		extensionAnim(searchBarWidth);
		fadeOutAnim(magnifyIconOpacity);
		fadeInAnim(searchBarOpacity);
	}
	const closeSearchBar = () => {
		console.log('closeSearchBar');
		compressAnim(searchBarWidth);
		fadeInAnim(magnifyIconOpacity);
		fadeOutAnim(searchBarOpacity);
	}



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
				/>
			</Animated.View>

			<Animated.View
				style={[
					// styles.animatedSearchBar,
					{
						width: searchBarWidth
					}
				]}
			>
				<TextInput
					placeholder='search'
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