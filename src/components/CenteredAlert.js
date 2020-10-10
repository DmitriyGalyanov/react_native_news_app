import React from 'react';

import {View, Text,
	StyleSheet, Dimensions} from 'react-native';


export default function CenteredAlert(props) {
	const {alertText} = props;
	return (
		<View style={styles.wrap}>
			<Text>
				{alertText}
			</Text>
		</View>
	)
}


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
	wrap: {
		justifyContent: 'center',
		alignItems: 'center',
		height: height - 160, //header and bottomNav heights combined
		width: width
	}
})