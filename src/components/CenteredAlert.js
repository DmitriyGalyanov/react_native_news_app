import React from 'react';

import {View, Text,
	StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

export default function CenteredAlert(props) {
	const {target, alertText} = props;
	return (
		<View style={styles.wrap}>
			<Text>
				{`${target} ${alertText}`}
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