import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import {View, Button, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {selectThemeData} from 'state_slices/themeSlice';

import {ThemeContext} from 'theme/ThemeContext';


ParametersButton.propTypes = {
	title: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	buttonsStyle: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.objectOf(
				PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number,
				])
			)
		),
		PropTypes.objectOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			])
		)
	]),
	onPress: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	chosen: PropTypes.bool
};
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