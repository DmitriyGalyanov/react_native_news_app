import React from 'react';

import {View, Button, StyleSheet} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {changeEndpoint,
	changeCountry} from 'state_slices/searchParametersSlice';

import themeColors from 'theme/colors';


export default function ParametersButton(props) {
	const dispatch = useDispatch();

	const {title,
		parameterType, value,
		disabled} = props;

	// const action = () => {
	// 	switch(parameterType) {
	// 		// case 'category': {
	// 		// 	return console.log();
	// 		// };
	// 		default: return console.log();
	// 	}
	// }

	// const handlePress = () => {
	// 	action('12');
	// 	console.log('type', parameterType);
	// 	console.log('value', value);
		
	// }

	return (
		<View style={styles.wrap}>
			<Button
				title={title}
				onPress={() => handlePress()}
				disabled={disabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		minWidth: 130
		// flexBasis: 80,
		// flexBasis: 70,
		// height: 40
		// flex: 1
		// flexGrow: 1,
		// marginHorizontal: 10
		
		// flexBasis: 80
		// width: windowWidth * 0.2
		// width: 100
	},
});