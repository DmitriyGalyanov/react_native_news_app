import React from 'react';

import {View, Button, StyleSheet} from 'react-native';

import themeColors from 'theme/colors';


export default function ParametersButton(props) {

	const {title,
		parameterType, value,
		onPress: handlePress,
		disabled, chosen} = props;

	let wrapStyles = [styles.wrap];
	// if (chosen) wrapStyles.push(styles.chosen);

	return (
		<View style={wrapStyles}>
			<Button
				title={title}
				onPress={() => handlePress(value)}
				disabled={disabled}
				color={chosen ? themeColors.secondary : themeColors.main}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		minWidth: 130
	},
	chosen: {
	},
});