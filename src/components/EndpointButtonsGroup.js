import React, {useContext} from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {selectSearchParametersData} from 'state_slices/searchParametersSlice';
import {selectLanguageData} from 'state_slices/languageSlice';

import ParametersButton from 'components/ParametersButton';

import {LocalizationContext} from 'localization/LocalizationContext';


export default function EndpointButtonsGroup(props) {
	const searchQuery = useSelector(selectSearchParametersData)
		.entries?.searchQuery;

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	const localization = useContext(LocalizationContext)[interfaceLanguage]
		.alerts;

	const {emptySearchQuery} = localization;

	const {wrapStyle, buttonsStyle,
		header,
		parameterValue,
		buttonsData,
		onPress: handlePress} = props;

	const wrapStyles = [styles.wrap, wrapStyle];

	return (
		<View style={wrapStyles}>
			<Text style={styles.header}>
				{header}
			</Text>
			<View style={styles.list}
			>
				{buttonsData.map((button, index) => {
					const {title, value} = button;

					const disabled = !searchQuery &&
						value !== 'everything';

					return (
						<View key={index}>
							<ParametersButton
								buttonsStyle={[styles.button, buttonsStyle]}
								title={title}
								value={value}
								onPress={handlePress}
								disabled={disabled}
								chosen={parameterValue === value}
							/>
							{disabled && (
								<View style={styles.disabledNoteWrap}>
									<Text style={styles.disabledNote}>
										{`'${title}' ${emptySearchQuery}`}
									</Text>
								</View>
							)}
						</View>
					)
				})}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrap: {
		paddingHorizontal: 20
	},
	header: {
		alignSelf: 'flex-start'
	},
	list: {
		flexDirection: 'row',
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
	}
});