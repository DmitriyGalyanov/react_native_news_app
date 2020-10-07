import React from 'react';

import {View, Text,
	StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

export default function LoadingIndicator(props) {
	const {target} = props;
	return (
		<View style={styles.wrap}>
			<Text>
				{target} is loading...
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		justifyContent: 'center',
		alignItems: 'center',
		height: height,
		width: width
	}
})