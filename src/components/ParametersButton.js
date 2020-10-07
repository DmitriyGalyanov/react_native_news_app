import React from 'react';

import {View, Button, StyleSheet} from 'react-native';

import themeColors from 'theme/colors';


export default function ParametersButton(props) {

	const {title, value,
		buttonsStyle: buttonStyle,
		onPress: handlePress,
		disabled, chosen} = props;

	const wrapStyles = [styles.wrap, buttonStyle];

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
});