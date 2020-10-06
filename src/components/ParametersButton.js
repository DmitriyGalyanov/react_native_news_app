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
		onPress: handlePress,
		disabled} = props;

	return (
		<View style={styles.wrap}>
			<Button
				title={title}
				onPress={() => handlePress(value)}
				disabled={disabled}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		minWidth: 130
	},
});