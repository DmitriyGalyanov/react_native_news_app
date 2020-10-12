import React, {useContext} from 'react';

import {View, Button, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {selectThemeData} from 'state_slices/themeSlice';

import {ThemeContext} from 'theme/ThemeContext';


export default function ParametersButton(props) {
	const themeName = useSelector(selectThemeData).entries.value;
	const themeColors = useContext(ThemeContext).colors[themeName];

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