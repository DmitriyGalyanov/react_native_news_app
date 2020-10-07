import React from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

import ParametersButton from 'components/ParametersButton';


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
		paddingHorizontal: 20
	},
	header: {
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
		textAlign: "center"
	}
});