import React, {useState, useEffect} from 'react';

import {View, Text,
	StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {selectSearchParametersData, toggleSource}
	from 'state_slices/searchParametersSlice';

import ParametersButton from 'components/ParametersButton';
import {selectLanguageData} from 'state_slices/languageSlice';


export default function SourcesButtonsGroup(props) {
	const dispatch = useDispatch();

	const [localization, setLocalization] = useState({
		parametersTitles: {},
		alerts: {}
	});

	const interfaceLanguage = useSelector(selectLanguageData).entries.value;

	useEffect(() => {
		import(`localization`)
		.then(data => {
			setLocalization(data[interfaceLanguage]);
		});
	}, [interfaceLanguage]);

	const {sourcesTitle} = localization?.parametersTitles;

	const {onlyApplicableWithEverythingEndpoint} = localization?.alerts;

	const sourcesButtonsData = useSelector(selectSearchParametersData)
		.entries?.sources;

	const endpoint = useSelector(selectSearchParametersData)
		.entries?.endpoint;

	const getIsGroupDisabled = () => {
		if (endpoint === 'everything') return false;
		return true;
	};
	const isGroupDisabled = getIsGroupDisabled();

	const {wrapStyle, buttonsStyle} = props;

	const wrapStyles = [styles.wrap, wrapStyle];

	const handlePress = (value) => {
		dispatch(toggleSource(value));
	};

	return (
		<View style={wrapStyles}>
			<Text style={styles.header}>
				{sourcesTitle}
			</Text>
			<View style={styles.list}>
				{Object.entries(sourcesButtonsData).map(button => {
					const {title, id, isChosen} = button[1];
					return <ParametersButton key={button[0]}
						buttonsStyle={[styles.button, buttonsStyle]}
						title={title}
						value={id}
						disabled={isGroupDisabled}
						onPress={() => handlePress(id)}
						chosen={isChosen}
					/>
				})}
			</View>
			{isGroupDisabled && (
				<View style={styles.disabledNoteWrap}>
					<Text style={styles.disabledNote}>
						{`'${sourcesTitle}' ${onlyApplicableWithEverythingEndpoint}`}
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
		alignSelf: 'flex-start'
	},
	list: {
		flexDirection: 'row',
		justifyContent: "space-between",
		flexWrap: "wrap"
	},
	button: {
		marginTop: 2,
		minWidth: 145
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