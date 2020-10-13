import React from 'react';
import PropTypes from 'prop-types';

import {View, Text,
	StyleSheet} from 'react-native';

import ParametersButton from 'components/ParametersButton';


ParametersButtonsGroup.propTypes = {
	row: PropTypes.bool,
	wrapStyle: PropTypes.oneOfType([
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
	header: PropTypes.string.isRequired,
	parameterValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired,
	buttonsData: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number,
			])
		)
	).isRequired,
	onPress: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	disabledNote: PropTypes.string
};
export default function ParametersButtonsGroup(props) {
	const {row, wrapStyle,
		buttonsStyle,
		header,
		parameterValue,
		buttonsData,
		onPress: handlePress,
		disabled, disabledNote,
		} = props;

	const wrapStyles = [styles.wrap, wrapStyle];

	return (
		<View style={wrapStyles}>
			<Text style={[
					styles.header,
					{alignSelf: row ? 'flex-start' : 'center'}
				]}>
				{header}
			</Text>
			<View style={[
					styles.list,
					{flexDirection: row ? 'row' : 'column'}
				]}
			>
				{buttonsData.map((button, index) => {
					const {title, value} = button;
					return <ParametersButton key={index}
						buttonsStyle={[styles.button, buttonsStyle]}
						title={title}
						value={value}
						onPress={handlePress}
						disabled={disabled}
						chosen={parameterValue === value}
					/>
				})}
			</View>
			{disabled && (
				<View style={styles.disabledNoteWrap}>
					<Text style={styles.disabledNote}>
						{`'${header}' ${disabledNote}`}
					</Text>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingHorizontal: 20,
		marginBottom: 4
	},
	header: {
		fontSize: 18
	},
	list: { //give it a border?
		justifyContent: "space-between",
		flexWrap: "wrap"
	},
	button: {
		marginTop: 2
	},
	disabledNoteWrap: {
		flexDirection: "row",
	},
	disabledNote: {
		flex: 1,
		flexWrap: "wrap",
		textAlign: "center",
		fontSize: 15
	}
});